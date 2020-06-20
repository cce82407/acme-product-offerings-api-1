const chalk = require('chalk');
const { db } = require('./db');
const { Company, Offering, Product } = require('./models');

Company.belongsToMany(Product, {
  through: Offering
});

Product.belongsToMany(Company, {
  through: Offering
});

// Offering.belongsTo(Company);
// Company.hasMany(Offering);
// Offering.belongsTo(Product);
// Product.hasMany(Offering);

const seed = async (force = false) => {
    try {
      await db.sync({ force });
  
      console.log(chalk.green(`DB successfully connected, and synced. Force: ${force}`));
    } catch (e) {
      console.log(chalk.red('Error while connecting to database.'));
      throw e;
    }
  };
  
  module.exports = {
    db,
    seed,
    Company,
    Offering,
    Product
  };

