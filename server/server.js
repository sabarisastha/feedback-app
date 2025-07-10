const express = require('express'); // Load the express
const app = express(); // it create the app with express
const cors = require('cors'); // load the Cross Origins Resources Sharing Module from npm 

const feedbackRoutes = require("./routes/feedback"); // Import the feedback logic file

app.use(express.json()); // it convert the body input in Json format 
const PORT = 5000;

app.use(cors()); //it allow f-e to talk to b-e

app.use('/feedback',feedbackRoutes); // Define Routes

app.listen(PORT,()=>{ console.log("The server Running in Port "+ PORT);}); // START the server in port 5000;
