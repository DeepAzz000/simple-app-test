
# 🧪 Simple React + Node.js QA Automation Project

This project demonstrates UI and API automation for a basic React frontend and Node.js backend. It covers login, CRUD operations, and test strategies using Cypress and Postman.

---

## 🚀 Features

### ✅ Functional UI Tests (with Cypress)
- Login with valid/invalid credentials
- Create item (button + Enter key)
- Edit existing item
- Delete item
- Assert item presence or absence

### ✅ API Tests (with Postman + Newman)
- `POST /login`
- `GET /items`
- `POST /items`
- `PUT /items/:id`
- `DELETE /items/:id`

Includes both positive and negative test cases.

---

## 🧰 Tools Used

| Purpose            | Tool          |
|--------------------|---------------|
| UI Automation      | Cypress       |
| API Automation     | Postman + Newman |
| Test Data Utility  | Custom Cypress commands |
| CI Integration     | GitHub Actions |
| Optional and future Reporting | Cypress Cloud |

---

## 🛠️ Setup Instructions

### 1. Clone and Install
```bash
git clone <repo-url>
cd simple-test-app
npm install
```

### 2. Run the App
```bash
npm run build
npm start
```

App runs on: `http://localhost:8080`

---

## 🧪 Run Cypress UI Tests
```bash
npx cypress open
npx cypress run
```

Credentials are loaded from environment:
- `CYPRESS_valid_username=admin`
- `CYPRESS_valid_password=AdminPass1`
- `CYPRESS_invalid_password=incorrectpass`

---

## 🧪 Run Postman API Tests
```bash
newman run postman/Tests.postman_collection.json
```

Make sure your app is running locally before executing the tests.

---

## 📦 CI/CD Integration

GitHub Actions pipeline runs Cypress and Newman tests on every push to `main`. See `.github/workflows/ci.yml`.

---

## 📄 Documentation

See `/docs/Test_Strategy_SimpleApp_QA.pdf` for a detailed test plan.

---

## ✅ Author

Prepared with ❤️ by Abdelaziz Sahel.
