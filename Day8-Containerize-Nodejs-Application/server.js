
const express = require('express');                    // imports the Express library into your project
const app = express();                                 // creates a new Express application
const PORT = process.env.PORT ||5000;                 // port number for your server to listen on
 
// Define endpoint to fetch data
app.get("/posts", async (req, res) => {
    try{
        
const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=15");         // Fetches the first 10 posts from the API
        const data = await response.json();                                                   // Parses the JSON response from the API
        res.json(data);                                                                       // Sends the data as a JSON response to the client
    }  
    catch(error)
    {
       console.error("Error fetching posts:", error);
       res.status(500).json({ error: "Internal Server Error" });
    }  
});
// Define endpoint to fetch post by ID as query parameter
app.get("/posts/:id", async (req, res) => {
    const { id } = req.params;                                                                // Extracts the post ID from the request parameters
    try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`); // Fetches a specific post by ID from the API
            const data = await response.json();                                               // Parses the JSON response from the API
            res.json(data); 
        } 
        catch (error)
        {
          console.error("Error fetching post:", error);
          res.status(500).json({ error: "Internal Server Error" });
        }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${5000}`);                             // Logs a message indicating the server is running
});



