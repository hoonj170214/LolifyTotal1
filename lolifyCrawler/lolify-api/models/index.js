const Sequelize = require('sequelize');

// config 는 설정이라는 뜻으로 써요.
// const config 안에는 데이터베이스 연결설정 내용을 쓰면 돼요.
// host는 Lolify의 host 주소로 환경변수에 지정된 값을 불러오거나 없다면 127.0.0.1 을 할당해요.
// 실제로 배포할 때는 환경변수를 설정해서 실제 mysql 서버로 연결할거에요.
// LOLIFY_MYSQL_HOST , LOLIFY_MYSQL_PASSWORD 는 환경변수이기 때문에 대문자로 적어줘야 해요.
// 이것 때문에 에러 났음...
const config = {
  host: process.env.LOLIFY_MYSQL_HOST || '127.0.0.1',
  port: 3306,
  database: 'lolify',
  user: 'lolify_admin',
  password: process.env.LOLIFY_MYSQL_PASSWORD || 'Wkd!!51349',
};

// mysql 서버는 기본값으로 3306번을 사용해요.
// sequelize 객체를 생성해요. 기본적으로 바로 위에서 선언한 database, user, password, host 를 사용해요.
// 마지막에 dialect는 어떤 종류의 데이터베이스 시스템을 사용하는지 적는거에요.
// mysql 을 사용하니까 mysql 이라고 적어줬어요. mongodb 를 사용하면 mongodb라고 적어주면 돼요.
// new Sequelize는 새로운 시퀄라이즈 인스턴스(객체)를 생성하는 코드에요.
// 새로운 객체를 생성해서 상수 sequelize에 할당해요.
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',
});

// 외부 모듈에서 사용할 수 있도록 내보내 줄게요.
module.exports = {
  sequelize,
  // 데이터 베이스 연결이 완료된 객체 모델을 생성해요.
  // champion.js , item.js 를 통해서 모델을 정의해줬어요. 그걸 객체 모델로 생성하는 명령어에요.
  // 추가적인 모델(js 파일)을 만들었으면 밑에다가 이름만 바꿔서 넣어주면 돼요.
  Champion: require('./champion.model')(sequelize),
  Item: require('./item.model')(sequelize),
  Stat: require('./ stat.model')(sequelize),
  Summary: require('./summary.model')(sequelize),
};
