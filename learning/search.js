var fs = require("fs");

var employee =[]
function readData(){

    let emp = fs.readFileSync("employee.json"); //string
    employee = JSON.parse(emp); //object
    


}


function searchData(age){

        readData();

        employee = employee.filter((emp)=>{
            return emp.age == age
        })

        return employee;
}

function searchData1(salary){

    readData();

    employee = employee.filter((emp)=>{
        return emp.salary == salary
    })

    return employee;
}

function searchData2(status){

    readData();

    employee = employee.filter((emp)=>{
        return emp.status == status
    })

    return employee;
}

module.exports = {searchData,searchData1,searchData2}