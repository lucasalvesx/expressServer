//BACKEND FILE

//importing express package
import express from "express";
const app = express();
const port = 3000; //port number

// serving static files from "html" path folder
app.use(express.static("expressServer"));

//making server handle GET requests 
app.get("/", (req, res) => {
    res.sendFile(path.join(htmlDir, "index.html"));
    // res.send("Got! Hello world");
});

//making server handle other endpoints (url.com/#)

// endpoint 1 - contact
app.get("/contact", (req, res) => {
    res.send("<h1> Contact us </h1> <br> <p> Lorem ipsum dolor sit amet quasquen pasluis colonistus comutari</p>")
});

// endpoint 2 - about
app.get("/about", (req, res) => {
    res.send("<h1> About us </h1> <br> <p> Lorem ipsum dolor sit amet quasquen pasluis colonistus comutari</p>")
})

// endpoint 3 - request
app.get("/request", (req, res) => {
    res.send("<style> h1{background-color: red; color: white; }</style>  <h1>Requested</h1>")
})

// shown info on terminal when server is initialized
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
