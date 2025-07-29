const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('dist'));

// In-memory storage for demo purposes
let items = [];
let nextId = 1;

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'AdminPass1') {
    return res.json({ message: 'Login successful' });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
});

// GET /items - Retrieve all items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST /items - Create a new item
app.post('/items', (req, res) => {
  const { text } = req.body;
  
  if (!text || !text.trim()) {
    return res.status(400).json({ error: 'Item text is required' });
  }

  const newItem = {
    id: nextId++,
    text: text.trim(),
    createdAt: new Date().toISOString()
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT /items/:id - Update an existing item
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { text } = req.body;

  if (!text || !text.trim()) {
    return res.status(400).json({ error: 'Item text is required' });
  }

  const itemIndex = items.findIndex(item => item.id === id);
  
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  items[itemIndex].text = text.trim();
  items[itemIndex].updatedAt = new Date().toISOString();
  
  res.json(items[itemIndex]);
});

// DELETE /items/:id - Delete an item
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex(item => item.id === id);
  
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  const deletedItem = items.splice(itemIndex, 1)[0];
  res.json(deletedItem);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));