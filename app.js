const express = require('express')
const bodyParser = require("body-parser")
const date =require(__dirname + "/date.js")



const todo = express()
todo.use(bodyParser.urlencoded({extended:true}))
todo.use(express.static("public"))

todo.set("view engine","ejs")




var items=["Buy food","Cook Food","Eat Food"];
var workItems=[];


todo.get("/",function(req,res){
    let day = date.getDay()
    // var dayNumber= today.getDay()
    
    // switch (dayNumber) {
    //     case 0:
    //         day='Sunday'
            
    //         break;
    //     case 1:
    //         day='Sunday'
            
    //         break;
    //     case 2:
    //         day='Tuesday'
            
    //         break;
    //     case 3:
    //         day='Wednesday'
            
    //         break;
    //     case 4:
    //         day='Thursday'
            
    //         break;
    //     case 5:
    //         day='Friday'
            
    //         break;
    //     case 6:
    //         day='Saturday'
            
    //         break;
    
    //     default:
    //         console.log("Fuck you! " + dayNumber)
           
    // }
    res.render("list",{listTitle:day,newlistItems:items});
})
todo.post("/",function(req,res){
    console.log(req.body)
    let item=req.body.newitem;

    if(req.body.list ==="Work"){
        workItems.push(item)
        res.redirect("/work")
    }
    else{
        items.push(item);
        res.redirect("/")
    }


})

todo.get("/work",function(req,res){
    res.render("list",{listTitle:"Work",newlistItems: workItems});
})

todo.get("/about",function(req,res){
    res.render("about")
})


todo.listen(3500, function(){
    console.log("server is running at port 3500")
})

