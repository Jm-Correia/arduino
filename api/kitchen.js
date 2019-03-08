const mysql = require('mysql');
const moment = require('moment');
module.exports = app =>{
  
    const save = async (req,res)=>{
        const kitchen = {...req.body};
        console.log(`Informações chegando umidade: ${kitchen.umidade} e temperatura: ${kitchen.temperatura}`);
        
        let connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '12345',
                database: 'monitor_home_temperature'
            });
        
        let newDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

        //connection.connect();

       
        const query = `insert into KITCHEN (date_hour, moisture, temperature) VALUE ('${newDate}', '${kitchen.umidade}','${kitchen.temperatura}');`
        
        connection.query(query, function(error, results, fields){
            if(error) 
              res.json(error);
            else
              res.json(results);
            console.log('executou!');
        }); 
        connection.end();   
    }
    
    return {save};
}

