import express from "express";

const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));




const port = process.env.PORT || 5001;


app.get("/", async (req, res) => {
    console.log(req.body);
    console.log("TESDT API HIT...");
    console.log(req.body.content[0]);
  });
  
  app.listen(port, () => console.log(`server running on port: ${port}`));