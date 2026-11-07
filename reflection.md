# W02 Reflection Document: Books and Authors

**Student Name:** Masango Dewheretsoko  
**Course:** CSE 341 Web Services  
**Assignment:** W02 Assignment - Books and Authors  

---

## 1. Submission Links
* **Hosted api-docs URL (Render):** https://my-books-service.onrender.com/api-docs
* **Walk-through Video Link:** https://www.loom.com/share/e64d6bfaa1e34e86bcafbdf0ca5c74bc
* **GitHub Repository:** https://github.com/Masango763/my-books-service

---

## 2. GitHub Workflow (Pull Requests & Issues)
* **Books Collection:**
  * GitHub Issue: https://github.com/Masango763/my-books-service/issues/1
  * Merged Pull Request: https://github.com/Masango763/my-books-service/pull/1
*
cat << 'EOF' > reflection.md
# W02 Reflection Document: Books and Authors

**Student Name:** Masango Dewheretsoko  
**Course:** CSE 341 Web Services  
**Assignment:** W02 Assignment - Books and Authors  

---

## 1. Submission Links
* **Hosted api-docs URL (Render):** https://my-books-service.onrender.com/api-docs
* **Walk-through Video Link:** https://www.loom.com/share/e64d6bfaa1e34e86bcafbdf0ca5c74bc
* **GitHub Repository:** https://github.com/Masango763/my-books-service

---

## 2. GitHub Workflow (Pull Requests & Issues)
* **Books Collection:**
  * GitHub Issue: https://github.com/Masango763/my-books-service/issues/1
  * Merged Pull Request: https://github.com/Masango763/my-books-service/pull/1
* **Authors Collection:**
  * GitHub Issue: https://github.com/Masango763/my-books-service/issues/2
  * Merged Pull Request: https://github.com/Masango763/my-books-service/pull/2

---

## 3. Video Outline & Summary
The walkthrough video demonstrates:
1. **Student Identification:** Clear introduction with my name (Masango Dewheretsoko).
2. **Hosted Swagger UI:** Navigating to `https://my-books-service.onrender.com/api-docs`.
3. **Book WRITE Route:** Executing a `POST` or `PUT` request for the Books resource in Swagger.
4. **Author WRITE Route:** Executing a `POST` or `PUT` request for the Authors resource in Swagger.
5. **Controller Logic Verification:** Reviewing controller implementation for success (`200`/`201`), resource not found (`404`), and error (`500`) handling.
6. **Status Code Rationale:** Explaining the selection of `201 Created` for resource creation and `500 Internal Server Error` for error handling.

---

## 4. Time-Spent Reflection
Configuring `swagger-autogen` and wiring up the direct MongoDB connections took slightly more time than anticipated due to environment adjustments. However, constructing the endpoints for both the `books` and `authors` resources proceeded efficiently using modular routing patterns.

---

## 5. Benefits of Swagger (OpenAPI)
Integrating Swagger UI (`swagger-ui-express`) provides interactive, self-documenting endpoints. It allows developers and consumers to inspect request schemas, parameter requirements, and response structures in real-time without needing external tools like Postman to run manual baseline tests.

---

## 6. Process & Habit Improvement
Moving forward, I will configure Swagger documentation generation immediately after defining new API routes, ensuring all success and error paths are verified locally before opening pull requests.
