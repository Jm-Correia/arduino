const mysql = require('mysql');
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
        

        //connection.connect();

        const query = `insert into KITCHEN (date_hour, moisture, temperature) VALUE (${new Date()}, ${kitchen.umidade},${kitchen.temperatura});`
        
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

