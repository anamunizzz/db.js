// index.js
const sequelize = require('./db');
const User = require('./user');

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Banco de dados sincronizado.');

    const user = await User.create({
      nome: 'Ana Luiza',
      email: 'ana@example.com',
      idade: 18,
      profissao: 'Desenvolvedora'
    });

    console.log('Usuário criado:', user.toJSON());
  } catch (error) {
    console.error('Erro ao conectar ou criar usuário:', error);
  } finally {
    await sequelize.close();
  }
})();
