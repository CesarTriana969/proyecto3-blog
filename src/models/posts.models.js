const { DataTypes } = require('sequelize')

const db = require('../utils/database')


const Posts = db.define('posts', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false, //? not null
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isPublished: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
})








module.exports = Posts