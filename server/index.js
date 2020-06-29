import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/users', (req, res) => {
  res.json([
    {
      name: 'ANPINA',
      email: 'antonio.pina@tvglobo.com.br',
      includeDate: '28/05/2019',
      alterDate: '30/05/2019',
      rules: '01',
      status: 'ATIVO',
    },
    {
      name: 'CCHANG',
      email: 'ciro.chang@tvglobo.com.br',
      includeDate: '28/05/2019',
      alterDate: '30/05/2019',
      rules: '01',
      status: 'ATIVO',
    },
    {
      name: 'TMARCAL',
      email: 'thiago.marcal@tvglobo.com.br',
      includeDate: '28/05/2019',
      alterDate: '30/05/2019',
      rules: '01',
      status: 'ATIVO',
    },
    {
      name: 'ECGIANN',
      email: 'ecgiannotto@tvglobo.com.br',
      includeDate: '28/05/2019',
      alterDate: '30/05/2019',
      rules: '01',
      status: 'ATIVO',
    },
    {
      name: 'YFERNAND',
      email: 'yuri.vasquez@tvglobo.com.br',
      includeDate: '28/05/2019',
      alterDate: '30/05/2019',
      rules: '01',
      status: 'ATIVO',
    },
    {
      name: 'PLACERDA',
      email: 'pedro.soares.lacerda@tvglobo.com.br',
      includeDate: '28/05/2019',
      alterDate: '30/05/2019',
      rules: '01',
      status: 'ATIVO',
    },
  ]);
});

app.listen(4200, () => {
  console.log('Server running on port 4200');
});
