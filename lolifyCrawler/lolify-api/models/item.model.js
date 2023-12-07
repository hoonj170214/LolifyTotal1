const { DataTypes } = require('sequelize');
// DataTypes 오타나면 안돼요.
// Datatype 이렇게 치면 안돼요. 대문자 소문자 같은 것도 똑같이 해야 해요. 왠만하면 자동완성 ㄱㄱ

module.exports = (sequelize) => {
  return sequelize.define(
    'Item',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      ItemName: {
        type: DataTypes.CHAR(10),
        allowNull: false,
      },
      // 스탯
      stat: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      // 설명
      desc: {
        type: DataTypes.CHAR(100),
        allowNull: false,
      },
      // 신화템 지속효과
      effect: {
        type: DataTypes.CHAR(50),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'Item',
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
      tiemstamps: false,
    }
  );
};
