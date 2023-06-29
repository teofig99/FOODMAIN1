const { DataTypes } = require('sequelize');
const {UUIDV4} = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Type', {
    
    dietType:{
        type: DataTypes.STRING,
        allowNull: false,
      },

  },
{
  timestamps: false


  });
};
