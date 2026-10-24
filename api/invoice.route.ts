
import { Router } from 'express';


import {
    findALLInvoiceById,
    findALLInvoices
} from './invoice.service.ts';

const router = Router();

router.get('/',(_request, response) => {
    const invoices = findALLInvoiceById();
    response.status(200).json({invoices})
});

router.get('/:id',(request, response) => {

  const id = Number(request.params.id);

  findALLInvoiceById(id);

  if (!invoice) response.status(404).json({
    error: {
    status: 404,
    message: 'Fatura não encontrada.'
  }
});

  response.status(200).json(invoice) 
});

export default router; 