//http module
var http = require('http')

//create server
var PORT = 3000
const server = http.createServer()
server.listen(PORT,()=>{
    console.log('\x1b[32m Server is running \x1b[30m',PORT);
})
//LISTEN TO PORT 3000