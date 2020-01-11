const mysql = require('mysql');


function execSqlQuery(sqlQuery, res){
    console.log(sqlQuery)
    const conection = mysql.createConnection({
        host     : 'localhost',
        port     :  3306,
        user     : 'root',
        password : '',
        database : 'funcionarios'
    })
    
    conection.query(sqlQuery, (error, result, fields) => {
        if(error){
            res.json(error)
        } else {
            res.json(result)
        }
        conection.end();
        console.log('executado')
    })

}

module.exports = execSqlQuery