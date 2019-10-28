const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/trainee-future", {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", function() {
  console.log("mongoose connection error");
  console.log("____________________________");
});
db.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("____________________________");
});
//-----------------------------------ALL SCHEMA

let trainee = new mongoose.Schema({
      fullName: String,
      email: String,
      gender: String,
      university: String,
      password: String,
      img_path: String,
      field: String
})

let companies = new mongoose.Schema({
      name: String,
      email: String,
      password: String,
      website: String,
      city: String,
      location: String,
      comp_description: String,
      img_path: String,
      field: String,
      post: [
        {
          job_description: String,
          field: String,
          comments: [{ body: String }]
        }
      ]
});
let Trainee = mongoose.model("trainee", trainee);
let Companies = mongoose.model("companies", companies);


// ___________________________ Read company__________________

let getCompany = cb => {
  console.log('GET  FROM DATABASE');
  Companies.find({},function(err, docs) {
    if (err) {
      console.log('ERR:', err);
      cb(err);
    }else{
      console.log('DOCS:', docs);
      cb(docs);
    }
  });
}; 

let getTrainee= cb => {
  console.log('GET  FROM DATABASE');
  Trainee.find({},function(err, docs) {
    if (err) {
      console.log('ERR:', err);
      cb(err);
    }else{
      console.log('DOCS:', docs);
      cb(docs);
    }
  });
};


let checkLogin = (cb,data)=> {
  console.log('GET LOGIN FROM DATABASE');
  Companies.find(data,function(err, docs) {
    if (err) {
      console.log('ERR:', err);
      cb(err);
    }else{
      console.log('DOCS:', docs);
      cb(docs);
    }
  });
}; 


let checkLoginTrainee = (cb,data)=>{
  console.log('GET checkLoginTrainee FROM DATABASE');
  Trainee.find(data,function(err, docs) {
    if (err) {
      console.log('ERR:', err);
      cb(err);
    }else{
      console.log('DOCS:', docs);
      cb(docs);
    }
  });

}




// ___________________________ ADD company__________________


let addCompany = (cb, box) => {
  console.log("BOXCOMP:", box);

  Companies.insertMany([
    {
      name: box.it.name,
      email: box.it.email,
      website: box.it.website,
      city: box.it.city,
      location: box.it.location,
      comp_description: box.it.comp_description,
      img_path: box.it.img_path,
      field: box.it.field,
      password:box.it.password
    }
  ],
  function(err, NewComp) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("NEWTODO:", NewComp);
    getCompany(cb);
  }

  );
 
};

// ___________________________ ADD Trainee__________________

let addT =(cb , box)=>{
  console.log("BOXTTTTTT:", box);
  Trainee.insertMany([
    {
      fullName: box.i.fullName,
      email: box.i.email,
      gender: box.i.gender,
      university: box.i.university,
      password: box.i.password,
      img_path: box.i.img_path,
      field: box.i.field
    }
  ]
  , function (err) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("NEWTTTT:");
    getTrainee(cb);

  })

}

//------------------------- Add Post


let addPost = (newData,cb)=>{

  Companies.findByIdAndUpdate(newData._id,{$set:{post:newData.post}}, function(err, doc){
      if(err)
      {      console.log("ERR:", err);
    }
    console.log('Doooooooooooooooone');
    // cd("done");
    // console.log('cb', cb)
        // getPosts(cb);
        getPosts(cb);


      })


}
//------------------------- Read Post
let getPosts = (cb,CId) => {
  console.log('GET POST FROM DATABASE');
  Companies.find({_id:CId},function(err, docs) {
    if (err) {
      console.log('ERR:', err);
      cb(err);
    }else{
      console.log('DOCS::::::', docs);
      cb(docs[0]);
    }
  });
}; 


// ______________Delete Post_________________


let removePosts = (cb,CId,postId) =>{
  Companies.find({_id:CId},(err,docs)=>{
      if (err){
        cb(err);
        console.log('ERR:', err);
      }else{
        console.log('DOCS:', docs);
        docs[0].post=docs[0].post.filter((elem)=>{
          return postId!==elem.id
        })
        docs[0].save(()=>{
          getPosts(cb,CId);
        })
      }
  })
}

module.exports = {
  
  addCompany,
  addT,
  getCompany,
  addPost,
  getPosts,
  checkLogin,
  removePosts,
  checkLoginTrainee
};
