const db = require('../db')

db.query

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM carros', (error, results)=>{
                if (error) { rejeitado(error); return; }
                if (results.length > 0) {
                } else {
                    aceito(False);
                }


            });
        });
    }

};