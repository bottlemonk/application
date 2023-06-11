import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const InvoiceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"invoices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="food" source="food" />
        <TextField label="ID" source="id" />
        <TextField label="mileage" source="mileage" />
        <TextField label="site" source="site" />
        <BooleanField label="stopout" source="stopout" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="van" source="van" />
      </Datagrid>
    </List>
  );
};
