const {DataTypes} = require('sequelize');

const sequelize = require('../config/conexion.js');

const Categorias = sequelize.define('categorias',{
	id:{
		type:DataTypes.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
	categoria:{
		type:DataTypes.STRING(20),
		allowNull:false
	}
},{timestamps:true,freezeTableName:true});

module.exports = Categorias;

