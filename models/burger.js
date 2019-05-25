// Import ORM
var orm = require("../config/orm");

var burger = {

    all: function(cb){
        orm.selectAll("burgers", function(result){
            cb(result);
        });
    },

    create: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(result){
            cb(result);
        });
    },
    
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export
module.exports = burger;