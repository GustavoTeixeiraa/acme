import express from 'express';
import { error } from 'node:console';

import invoiceRouter from './invoice.route.ts';


const app = express();


app.get('/api/health',(equest, response) => {
  response.status(200).json({status: 'ok'})
});



app.use('/api/invoices', invoiceRouter);

app.use((request, response) => {
  response.status(404).json({error: {
    status: 404,
    message: 'Recurso não encontrado'
  } });
});

app.listen(3000);


