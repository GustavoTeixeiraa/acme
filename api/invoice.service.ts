
type InvoiceStatus = 'pending' | 'paid';

interface Customer {
  id: number;
  name: string;
  email: string;
}

interface Invoice {
  id: number;
  amount: number;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  customer: Customer;
}

const invoices: Invoice[] = [{
  id: 1,
  amount: 125037,
  status: 'pending',
  issueDate: '03-10-2026',
  dueDate: '2026-10-20',
  customer: {
    id: 7,
    name: 'Construtora Meridiano',
    email: 'comercial@meridiano.com'
  }
}, {
  id: 2,
  amount: 35000,
  status: 'paid',
  issueDate: '03-10-2026',
  dueDate: '05-11-2026',
  customer: {
    id: 7,
    name: 'Gráfica Nova',
    email: 'gráfica@meridiano.com'
  }
}
,
{
id: 3,
  amount: 35000,
  status: 'paid',
  issueDate: '03-10-2026',
  dueDate: '05-11-2026',
  customer: {
    id: 7,
    name: 'TendiTudo',
    email: 'tenditudo@gmail.com'
  }
}
];

export function findALLInvoices(): Invoice[] {
    return invoices;
}

export function findALLInvoiceById(id: number): Invoice | undefined {
   const invoice = invoices.find(invoice => invoice.id === id);

   if (!invoice) return invoice;

   return invoice;
}
