const { DataTypes } = require('sequelize');
const {UUIDV4} = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id:{
      type: DataTypes.STRING,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },


    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    types: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    diet: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    hs: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    steps: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
{
  timestamps: false


  });
};
