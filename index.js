const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const UserRouter = require("./Routes/user.routes");
const blogsRouter = require("./Routes/blogs.routes");
const commentsRouter = require("./Routes/comment.routes");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", UserRouter);
app.use("/blogs", blogsRouter);
app.use("/comments", commentsRouter);

app.use("/", (req, res) => {
  res.send("Hello Design Script This the backend");
});

app.listen(PORT || 8000, async () => {
  await dbConnect();
  console.log("Stared at http://localhost:8080");
});
