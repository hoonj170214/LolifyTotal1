// summary.model.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define(
    // db를 정의하겠다 는 뜻.
    'Summary', // 첫번째 매개변수 : 모델 이름
    {
      // 두번째 매개변수 : 속성 목록 ->  테이블 컬럼(테이블 열)
      id: {
        autoIncrement: true, // autoIncrement는 1씩 자동으로 증가하겠습니까? 물어보는 것.
        // 여기서 에러 발생
        /* Cannot read properties of undefined (reading 'INTEGER')
    at module.exports (/Users/jangseonghun/Documents/lolifyServer/lolify-api/models/champion.model.js:10:24)*/
        type: DataTypes.INTEGER.UNSIGNED, // unsigned 는 부호없는 정수. 제일 작은 값이 0, 1, ,2, (마이너스 안됨)
        allowNull: false, // 비어있는 것을 허용하겠습니까? 물어보는 것
        primaryKey: true, // 제일 중요한 키. 프라이머리키는 데이터를 구분하는 제일 중요한 키.
      },
      gameMode: {
        type: DataTypes.CHAR(10),
        allowNull: false,
      },
      day: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      winOrNot: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      gameTime: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      champion: {
        type: DataTypes.CHAR(10),
        allowNull: true,
      },
      // 킬관여율
      kp: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      cs: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      championThumbnail: {
        type: DataTypes.CHAR(10),
        allowNull: false,
      },
      userName: {
        type: DataTypes.CHAR(16),
        allowNull: false,
      },
    },
    {
      //  세번째 매개변수 : 추가 옵션
      sequelize,
      tableName: 'Summary',
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
