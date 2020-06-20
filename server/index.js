const express = require('express');
const chalk = require('chalk');
const path = require('path');
const {Product, Offering, Company, seed, db} = require('./db/index');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
});

app.get('/api/products', async (req,res) => {
    const products = await Product.findAll();
    res.send({
        products,
    });
});

app.get('/api/offerings', async (req,res) => {
    const offering = await Offering.findAll();
    res.send({
        offerings,
    });
});

app.get('/api/companies', async (req,res) => {
    const companies = await Company.findAll();
    res.send({
        companies
    });
});

app.post('/api/companies', async (req,res) => {
    const {name} = req.body;

    const createdCompany = await Company.create({
        name,
      });
  
      res.status(201).send({
        company: createdCompany,
        message: `Company ${name} was created successfully!`,
      });
})

app.post('/api/products', async (req,res) => {
    const {name, suggestedPrice} = req.body;

    const createdProduct = await Product.create({
        name,
        suggestedPrice
    });
  
    res.status(201).send({
        product: createdProduct,
        message: `Product ${name} at ${suggestedPrice} was created successfully!`,
    });
})

app.post('/api/offerings', async (req,res) => {
    const {price, companyId, productId} = req.body;

    const createdOffering = await Offering.create({
        price,
        companyId,
        productId
    });
  
    res.status(201).send({
        offering: createdOffering,
        message: `Offering company: ${companyId} product: ${productId} was created successfully!`,
    });
})

const startServer = () => new Promise((res) => {
    app.listen(PORT, () => {
      console.log(chalk.green(`Server is now listening on PORT:${PORT}`));
      res();
    });
});

const startApp = () => {
    return seed()
        .then(startServer)
        .then(() => {
            console.log(chalk.greenBright('Application started successfully.'));
          })
        .catch((e) => {
            console.log(chalk.red('Failed to start application.'));        
           throw e;
        });
}
  
startApp();


