# Simple App QA Test Automation

This project demonstrates a complete QA automation challenge for a small full-stack app with a React frontend and a Node.js backend API. The tests cover both UI and API scenarios using Cypress and Postman/Newman, and are integrated into a GitHub Actions CI pipeline.

---

## 📦 Project Structure

```
simple-test-app/
├── cypress/                 # UI automation test specs
├── docs/                    # Test plan & documentation
├── postman/                 # Postman API collection
├── public/                  # Static assets
├── src/                     # Frontend & Backend code
├── .github/workflows/      # GitHub Actions CI pipeline
└── README.md

```

## 🧾 Deliverables

- ✅ Functional UI automation with Cypress
- ✅ API tests with Postman and Newman
- ✅ GitHub Actions CI pipeline with both test suites
- ✅ Test documentation: [`Test_Strategy_Simple_App_Documentation.pdf`](./Test_Strategy_Simple_App_Documentation.pdf)
- ✅ Custom Cypress commands, dynamic data, and selectors using `data-cy`
- ✅ GitHub Actions for CI
- ✅ Dynamic item creation with random strings
- ✅ Custom Cypress commands for better readability and reusability

---

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

## 🧪 Tools Used

| Purpose        | Tool       |
|----------------|------------|
| UI Automation  | Cypress    |
| API Testing    | Postman & Newman |
| CI/CD Pipeline | GitHub Actions |
| Reporting      | Cypress CLI + GitHub workflow |
| Optional and future Reporting | Cypress Cloud |

---

## 🚀 How to Run the Tests

### ✅ Recommended: Run from GitHub Actions (CI)

> No setup needed on your machine.

1. Go to the **Actions** tab of this repo.
2. Select **"CI Pipeline"** workflow.
3. Click **"Run workflow"** → choose branch `master` → click **Run**.
4. Wait for the full test suite to complete.
5. Download test documentation or results from the workflow artifacts.

### 🖥️ Optional: Run Locally

> Requires Node.js 18+

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Start app
npm run build
npm start

App runs on: `http://localhost:8080`

# 3. Run Cypress tests
npx cypress open
npx cypress run

# 4. Run Postman tests via Newman
newman run postman/Tests.postman_collection.json
```

## 🔒 Credentials

Stored securely using Cypress environment variables:

```js
CYPRESS_valid_username = admin
CYPRESS_valid_password = AdminPass1
CYPRESS_invalid_password = incorrectpass
```

## 🙌 Author

**Abdelaziz Sahel**  
GitHub: [@DeepAzz000](https://github.com/DeepAzz000)

---