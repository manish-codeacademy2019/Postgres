const sequelizeSetUp = require('./sequelize');

describe('Sequelize connection', () => {
  it('Should Return Connected', (done) => {
    const callback = (data) => {
      expect(data).toEqual('Connected');
      done();
    };
    sequelizeSetUp.init(callback);
  });
});
describe('Inserting Data', () => {
  beforeEach(async () => {
    await sequelizeSetUp.User.truncate();
  });
  it('Should Insert Data into Postgres', async () => {
    const id = 1;
    await sequelizeSetUp.insert(id);
    const data = await sequelizeSetUp.User.findAll();
    expect(data.length).toEqual(1);
  });
});
