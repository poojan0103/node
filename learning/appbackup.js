//http module
var http = require('http')
const colors = require('colors');
var userdata = require('./filehandling/users')

userdata.readDataFromFille()
userdata.writeDataToFile()
userdata.appendDataToFile()
//userdata.removeFile()
//userdata.createFolder()
userdata.copyfile()
userdata.movefile()
//userdata.removeFolder()
//create server
var PORT = 3000

const server = http.createServer()
server.listen(PORT,()=>{
    console.log("server is running".bgRed,PORT);
})
//LISTEN TO PORT 3000