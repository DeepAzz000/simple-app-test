import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  state = {
    username: '',
    password: '',
    message: '',
    loggedIn: false,
    items: [],
    newItem: '',
    editingId: null,
    editingText: ''
  };

  handleLogin = async () => {
    const { username, password } = this.state;

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      if (response.ok) {
        this.setState({ message: data.message, loggedIn: true }, this.loadItems);
      } else {
        this.setState({ message: data.message });
      }
    } catch (error) {
      this.setState({ message: 'Login failed. Please try again.' });
    }
  };

  loadItems = async () => {
    try {
      const response = await fetch('/items');
      const items = await response.json();
      this.setState({ items });
    } catch (error) {
      console.error('Failed to load items:', error);
    }
  };

  addItem = async () => {
    const { newItem } = this.state;
    if (!newItem.trim()) return;

    try {
      const response = await fetch('/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newItem })
      });

      if (response.ok) {
        this.setState({ newItem: '' });
        this.loadItems();
      }
    } catch (error) {
      console.error('Failed to add item:', error);
    }
  };

  deleteItem = async (id) => {
    try {
      const response = await fetch(`/items/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        this.loadItems();
      }
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  startEdit = (id, text) => {
    this.setState({ editingId: id, editingText: text });
  };

  updateItem = async (id) => {
    const { editingText } = this.state;
    if (!editingText.trim()) return;

    try {
      const response = await fetch(`/items/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: editingText })
      });

      if (response.ok) {
        this.setState({ editingId: null, editingText: '' });
        this.loadItems();
      }
    } catch (error) {
      console.error('Failed to update item:', error);
    }
  };

  cancelEdit = () => {
    this.setState({ editingId: null, editingText: '' });
  };

  render() {
    const { 
      username, 
      password, 
      message, 
      loggedIn, 
      items, 
      newItem, 
      editingId, 
      editingText 
    } = this.state;

    if (loggedIn) {
      return (
        <div>
          <h1 data-cy="welcome-message">{`Hello ${username}`}</h1>
          <img src={ReactImage} alt="react" />
          
          <div data-cy="todo-section">
            <h2>Todo Items</h2>
            
            {/* Add new item */}
            <div data-cy="add-item-section">
              <input
                data-cy="new-item-input"
                placeholder="Add new item"
                value={newItem}
                onChange={e => this.setState({ newItem: e.target.value })}
                onKeyPress={e => e.key === 'Enter' && this.addItem()}
              />
              <button data-cy="add-item-btn" onClick={this.addItem}>
                Add Item
              </button>
            </div>

            {/* Items list */}
            <div data-cy="items-list">
              {items.length === 0 ? (
                <p data-cy="no-items">No items yet</p>
              ) : (
                items.map(item => (
                  <div key={item.id} data-cy="item" className="item">
                    {editingId === item.id ? (
                      <div data-cy="edit-item">
                        <input
                          data-cy="edit-input"
                          value={editingText}
                          onChange={e => this.setState({ editingText: e.target.value })}
                          onKeyPress={e => e.key === 'Enter' && this.updateItem(item.id)}
                        />
                        <button data-cy="save-btn" onClick={() => this.updateItem(item.id)}>Save</button>
                        <button data-cy="cancel-btn" onClick={this.cancelEdit}>Cancel</button>
                      </div>
                    ) : (
                      <div>
                        <span data-cy="item-text">{item.text}</span>
                        <button data-cy="edit-btn" onClick={() => this.startEdit(item.id, item.text)}>Edit</button>
                        <button data-cy="delete-btn" onClick={() => this.deleteItem(item.id)}>Delete</button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

          </div>
        </div>
      );
    }

    return (
      <div>
        <h1>Login</h1>
        <input
          placeholder="Username"
          data-cy="username"
          value={username}
          onChange={e => this.setState({ username: e.target.value })}
        />
        <br />
        <input
          placeholder="Password"
          data-cy="password"
          type="password"
          value={password}
          onChange={e => this.setState({ password: e.target.value })}
        />
        <br />
        <button data-cy="login-btn" onClick={this.handleLogin}>Login</button>
        <p data-cy="login-message">{message}</p>
      </div>
    );
  }
}
