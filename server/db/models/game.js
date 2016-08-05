'use strict';
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('game', {
    data: {
        type: Sequelize.JSON,
        allowNull:false
    }
    ,hash:{
        type:Sequelize.STRING,
        defaultValue:Math.random().toString(36).slice(2) 
    }
},{
    hooks:{
        beforeCreate: function(){
            console.log('setting it!')
            this.hash=Math.random().toString(36).slice(2);  
        }
    }
});
