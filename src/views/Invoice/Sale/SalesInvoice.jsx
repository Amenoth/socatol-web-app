import React from 'react';
import { Query } from 'react-apollo';

// Layout
import { MainContainer } from '../../../Layout';

// Molecules
import {
  ContentHeader,
  ButtonDialogForm,
  DataTable
} from '../../../components/Molecules';

// Queries
import { GET_SALES_INVOICES_QUERY } from '../../../queries/Invoice';
import Notification from '../../../components/Notification';

import SalesInvoiceForm from './SalesInvoiceForm';

const SalesInvoice = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const columns = [
    {
      name: 'dateEmit',
      title: 'Fecha'
    },
    {
      name: 'person',
      title: 'Cliente'
    },
    {
      name: 'number',
      title: 'Número'
    },
    {
      name: 'paymentType',
      title: 'Tipo de pago'
    },
    {
      name: 'amount',
      title: 'Monto'
    }
  ];
  return (
    <MainContainer>
      <ContentHeader title="Lista de facturas de venta">
        <ButtonDialogForm
          title="Facturar venta"
          scroll="body"
          form={SalesInvoiceForm}
          mutation={'NEW_WAREHOUSE_MUTATION'}
          success={setIsOpen}
        />
        <Notification
          open={isOpen}
          handleOpen={setIsOpen}
          message="Guardado con exito!"
        />
      </ContentHeader>
      <Query query={GET_SALES_INVOICES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) console.error(error);

          let { invoices } = data;

          console.log(data);
          return <DataTable columns={columns} rows={invoices} />;
        }}
      </Query>
    </MainContainer>
  );
};

export default SalesInvoice;
