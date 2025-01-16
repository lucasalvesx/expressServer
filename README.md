# ExpressJS Server Project

A simple example of using ExpressJS to create a web server with dynamic routes and static file serving. This project demonstrates the basic setup of an ExpressJS application and integrates a frontend to navigate between routes.

---

## **Features**

- **Static File Serving:** Serves static files such as HTML, CSS, and JavaScript from the `public` directory.
- **Dynamic Routes:** Handles multiple endpoints with tailored responses.
- **Interactive Navigation:** A frontend interface to navigate between the available routes.

---

## **Technologies Used**

- **Backend:** Node.js, Express.js, NPM
- **Frontend:** HTML, CSS, JavaScript

---

## **Project Structure**

```
project/
│
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── index.js
│   └── index.html
│
├── server.js
├── package.json
└── package-lock.json
```

### **Key Files**

1. **`server.js`:**
   - Sets up the Express server.
   - Serves static files from the front-end and handles dynamic routes.

2. **`index.html`:**
   - Main entry point for the frontend.
   - Contains navigation links for all available routes.

3. **`styles.css`:**
   - Provides basic styling for the frontend.

4. **`index.js`:**
   - Contains JavaScript for DOM interaction.

---

## **How to Run the Project**

### **Prerequisites**
- Node.js must be installed on your system.

### **Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/expressjs-server.git
   ```
2. Navigate to the project directory:
   ```bash
   cd expressjs-server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   node server.js
   ```
5. On your browser, go to:
   [http://localhost:3000/](http://localhost:3000/)

---

## **Endpoints**

| Route        | Description                  |
|--------------|------------------------------|
| `/`          | Home page.                   |
| `/contact`   | Displays contact info.    |
| `/about`     | Displays about information.  |
| `/request`   | Displays a demo page. |

---

## **Contributing**

Feel free to fork this repository and submit pull requests. 
Suggestions and improvements are always welcome!


