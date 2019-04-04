var connection = require('./connection');

var orm = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        })

    },

    insertOne: function(name, dev, cb){
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";

        connection.query(queryString, [name, dev], function(err, result){
            cb(result);
        })
    },

    updateOne: function(id, cb){
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";

        connection.query(queryString, [id], function(err, result){
            cb(result);
        })
    }

}



module.exports = orm;