const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var search = require("./search");
//app.use(express.params())
app.use(express.json())
app.use(bodyParser.urlencoded({ 
    extended: true 
 }));
 /*app.use(bodyParser.formdata({
    extended : true
 }))*/  


//create server using expres
const PORT = 3000
app.listen(PORT,()=>{
    console.log('server is running on port',PORT)

   
});
/*app.param('/hello',(req,res)=>{
    req.params('name')
    console.log(res.params)
})*/
app.get('/hello',(req,res)=>{
    res.send("Hello World")
});

app.post('/hello',(req,res)=>{
    res.send("Hello World a")
    console.log(req.body)
});

app.delete("/hello/:id",(req,res)=>{
    console.log(req.params.id);
    var id = req.params.id; 
    res.send("Hello ..."+id)

});
app.put("/user/:id",(req,res)=>{
    try{
        var id = req.params.id;
        if (id == 1){
            throw new Error("user not found");

        }else{
            res.json({
                message:"user update",
                id:id,
                data:req.body.data
            })
        }
    }catch (err){
        res.status(404).send(err.message);
    }
});

app.get("/user/:name",(req,res)=>{
    var name = req.params.name;
    res.send("Hello" +name)
})

app.get("/employee/:age",(req,res)=>{
try{



    var age = req.params.age;
    if(age < 18) {
        throw new Error("employee not found");
    }else{
        var employees = search.searchData(age)

        res.json(employees)    
    }
    
}catch(err){
    res.status(404).send(err.message);

}
})

app.get("/employees/:salary",(req,res)=>{
    try{
    
    
    
        var salary = req.params.salary;
        if(salary < 20000) {
            throw new Error("employee not found");
        }else{
            var employees = search.searchData1(salary)
    
            res.json(employees)    
        }
        
    }catch(err){
        res.status(404).send(err.message);
    
    }
    })