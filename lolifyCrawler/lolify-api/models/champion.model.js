const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define(
    'Champion', // 모델 이름
    {
      // 속성 목록 : 테이블 컬럼
      id: {
        autoIncrement: true,
        // 여기서 에러 발생
        /* Cannot read properties of undefined (reading 'INTEGER')
    at module.exports (/Users/jangseonghun/Documents/lolifyServer/lolify-api/models/champion.model.js:10:24)*/
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      championName: {
        type: DataTypes.CHAR(10),
        allowNull: false,
      },
      runes: {
        type: DataTypes.CHAR(10),
        allowNull: false,
      },
      skill: {
        type: DataTypes.CHAR(10),
        allowNull: false,
      },
      spell: {
        type: DataTypes.CHAR(10),
        allowNull: false,
      },
      item: {
        type: DataTypes.CHAR(10),
        allowNull: true,
      },
      stat: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    {
      // 추가 옵션
      sequelize,
      tableName: 'Champion',
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
      timestamps: false,
    }
  );
};
