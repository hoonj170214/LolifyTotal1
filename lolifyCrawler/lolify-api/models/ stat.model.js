// stat.model.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define(
    'Stat',
    {
      id: {
        autoIncrease: false,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      level: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      exp: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      hp: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      hpRegen: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      mp: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      mpRegen: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      Energy: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      rage: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      ad: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      ap: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      adaptiveForce: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      armor: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      magicResistance: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      attackSpeed: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      abilityHaste: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      critical: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      globalCriticalMultiplier: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      movementSpeed: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      lethality: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      armorPenetration: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      magicPenetration: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      physicalVamp: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
      },
      spellVamp: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
      },
      omnivamp: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
      },
      range: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      tenacity: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      slowResist: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      shield: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      shield: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      shield: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      goldIncreasePerSecond: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    {
      //  세번째 매개변수 : 추가 옵션
      sequelize,
      tableName: 'Stat',
      indexes: [
        {
          name: 'PRIMARY',
          unique: true, // 유니크는 '특별한, 독특한' 이라는 뜻. 중복이 없다는 뜻이에요.
          fields: [{ name: 'id' }], // 필드는 위에서 정의한 컬럼에서 어떤 열을 정의할지 적어주면 돼요.
        },
      ],
      timestamps: false, // 타임스탬프는 '갱신되는 시간을 기록하겠습니까?' 라고 물어보는 것. 챔피언은 비교적으로 느리게 업데이트되니까 FALSE.
    }
  );
};
