const {DataTypes}= require('sequelize');
const sequelize = require('../config/conexion.js');

const Productos =  sequelize.define('productos',{
	id:{
		type:DataTypes.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
	codigo:{
		type:DataTypes.STRING(20),
		allowNull:false
	},
	producto:{
		type:DataTypes.STRING(20),
		allowNull:false
	},
	categoriaId:{
		type:DataTypes.STRING(20),
		allowNull:false,
		references:{
			model:'categorias',
			key:'id'
		}
	},
	existenciaActual:{
		type:DataTypes.STRING(20),
		allowNull:false
	},
	precio:{
		type:DataTypes.STRING(20),
		allowNull:false
	}
},{timestamps:true, freezeTableName:true});

module.exports= Productos; 

