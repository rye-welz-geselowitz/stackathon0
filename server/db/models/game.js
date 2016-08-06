'use strict';
var Sequelize = require('sequelize');
var crypto = require('crypto');
var db = require('../_db');

module.exports = db.define('game', {
        data: {
            type: Sequelize.TEXT,
            allowNull:false
        },
        hash: {
            type: Sequelize.STRING
        }
    },{

    hooks: {
        beforeValidate: function (game) {
                console.log('creating hash!!')
                game.hash = Math.random().toString(36).slice(2);
            }
        }
});



