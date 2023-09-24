# Library Management API
Library System API for managing readers, books, and librarians. This documentation is also available in [Portuguese](https://github.com/felipecomarques/library-management-api/blob/main/docs/README.pt-br.md).

## 💿 Technologies and dependencies
![Technologies](https://skillicons.dev/icons?i=ts,prisma,mongodb,jest,express,nodejs)

## 📄 Documentation
The API documentation is available through Swagger (In development)

## 🔀 API Reference
<details>
 <summary><strong>Reader</strong></summary>
 <br/>
 
| **Method** | **Route**    | **Operation**             |
|:----------:|--------------|---------------------------|
|     GET    | /reader      | Retrieves all readers     |
|     GET    | /reader/{id} | Retrives one reader       |
|    POST    | /reader      | Register new reader       |
|     PUT    | /reader/{id} | Edit an existing reader   |
|   DELETE   | /reader/{id} | Delete an existing reader |
</details>

<details>
 <summary><strong>Librarian</strong></summary>
 <br/>

| **Method** | **Route**       | **Operation**                |
|:----------:|-----------------|------------------------------|
|     GET    | /librarian      | Retrieves all librarian      |
|     GET    | /librarian/{id} | Retrives one librarian       |
|    POST    | /librarian      | Register new librarian       |
|     PUT    | /librarian/{id} | Edit an existing librarian   |
|   DELETE   | /librarian/{id} | Delete an existing librarian |
</details>

<details>
 <summary><strong>Book</strong></summary>
 <br/>

| **Method** | **Route**  | **Operation**           |
|:----------:|------------|-------------------------|
|     GET    | /book      | Retrieves all books     |
|     GET    | /book/{id} | Retrives one book       |
|    POST    | /book      | Register new book       |
|     PUT    | /book/{id} | Edit an existing book   |
|   DELETE   | /book/{id} | Delete an existing book |
 </details>

## ⏬ Installation

To run this project locally, please follow these steps:
1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd <project-directory>
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

 ## ⚖️ License
 Code released under the [MIT LICENSE](https://github.com/felipecomarques/library-management-api/blob/main/LICENSE).