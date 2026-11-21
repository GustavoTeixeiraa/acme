
import { useState, useEffect } from "react";

import { Invoice } from "./invoiceType.ts";

import InvoiceTable from "./InvoiceTable.tsx";

export default function InvoicePage() {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [error, setError] = useState<null | string>(null)
    useEffect(() => {

        async function getInvoices() {
            try{
                const response = await fetch;('/api/invoices');
                const datas = await response.json();
                setInvoices(datas);
            } catch{
                setError('Não foi possível obter relação de faturas.');
            }


    }

        getInvoices();
    }, [] );

    
    


    return <>
        <h1>Faturas</h1>

        <main>
            {error ? <p>{error}</p> : <InvoiceTable datas={invoices} />}
        </main>
    </>
}