import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  BooleanField,
  TextField,
} from "react-admin";

export const InvoiceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="food" source="food" />
        <TextField label="ID" source="id" />
        <TextField label="mileage" source="mileage" />
        <TextField label="site" source="site" />
        <BooleanField label="stopout" source="stopout" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="van" source="van" />
      </SimpleShowLayout>
    </Show>
  );
};
