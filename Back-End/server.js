const express = require("express");
const cors = require("cors");
const DB = require("./db");
const app = express();

app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.json(`SERVER ON`);
});

app.post("/login", (req, res) => {
  console.log("REQ.login------------------------------------", req.body);
  let data = req.body;
  DB.checkLogin(comp => {
    res.json(comp);
  }, data);
});

app.post("/loginTrainee", (req, res) => {
  console.log("REQ.loginTrainee------------------------------------", req.body);
  let data = req.body;
  DB.checkLoginTrainee(comp => {
    res.json(comp);
  }, data);
});

app.post("/add", (res, req) => {
  console.log("ADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD", res.body);
});

// ___________________________ Read company__________________
app.get("/data", (req, res) => {
  DB.getCompany(result => {
    console.log("CALL BACK FROM SERVER");
    res.json(result);
  });
});

// ___________________________ ADD company__________________

app.post("/addComp", (req, res) => {
  console.log("REQ.BODYCOMPANY", req.body);

  let box = req.body;
  DB.addCompany(comp => {
    res.json(comp);
  }, box);
});

// ___________________________ ADD Trainee__________________

app.post("/addT", (req, res) => {
  console.log("REQ.BODYTTTTTTTT", req.body);
  let box = req.body;
  DB.addT(Trainee => {
    res.json(Trainee);
  }, box);
});

//----------------------------ADD POST--------------------

app.put("/addPost", (req, res) => {
  let box = req.body;
  console.log("BOXPOSTTTTTTTTTTTTTTTTTTTTTTTTT", req.body);

  DB.addPost(box, index => {
    console.log("iner poooooooooost");
    res.json(index);
  });
});

// ___________________________ Read Posts__________________
app.get("/posts", (req, res) => {
  DB.getPosts(result => {
    console.log("CALL BACK FROM SERVER");
    res.json(result);
  });
});

// ______________Delete Post _________________
app.delete("/deletePost/:idC/:idP", (req, res) => {
  console.log("CALL BACK FROM SERVER will delete");
  DB.removePosts(
    result => {
      res.json(result);
    },
    req.params.idC,
    req.params.idP
  );
});

const PORT = 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
