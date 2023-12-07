const { Champion } = require('../models');
/*
  - ORM 에서 제공하는 기능들(Mysql 에서 제공하는 것을 자바스크립트로 쓸 수 있어요.)
  아래 코드들에서 이해가 가지 않는 부분은 mysql 을 참고해주세요.
create() : INSERT 구문에 해당해요.
findAll() : SELECT 구문에 해당해요.
findOne() : SELECT 구문에 해당하는 작업을 하되 첫번쨰 찾은 레코드만 반환해요.
count() : SELECT 구문으로 검색된 레코드의 개수를 반환해요.
update() : UPDATE 구문에 해당해요.
destroy() : DELETE 구문에 해당해요.
upsert() : INSERT를 시도하되 기존에 존재하는 데이터가 있으면 업데이트해요.
*/

// getAll 은 데이터베이스 관련 작업을 하는 함수예요.
// ORM에서 제공하는 기능이에요.
// getAll 함수에는 findAll 함수를 사용해요.
async function getAll(req, res) {
  const result = await Champion.findAll();
  res.status(200).json({ result }); // findAll 작업이 끝나면 200 (성공) 응답을 보내요.
}

// insertOrUpdate함수에에는 count 함수가 들어가요.
async function insertOrUpdate(req, res) {
  const { id } = req.body;

  if (!id) {
    res.status(400).json({ error: 'id is required' });
    return;
  }
  // champion 의 개수를 세요.
  const count = await Champion.count({ where: id });

  if (count === 0) {
    await Champion.create(req.body);
  } else {
    await Champion.update(req.body, { where: id });
  }
  res.status(200).json({ result: 'success' });
}

async function remove(req, res) {
  const { id } = req.body;
  if (!id) {
    res.status(400).json({ error: 'id is required' });
    return;
  }
  // destroy 안에 where 조건을 명시하지 않으면 모든 데이터를 삭제하니까 꼭 where을 적어야 해요.
  await Champion.destroy({
    where: id,
  });
  res.status(200).json({ result: 'success' });
}

module.exports = {
  getAll,
  insertOrUpdate,
  remove,
};
