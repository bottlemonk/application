import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  NumberInput,
  SelectArrayInput,
} from "react-admin";

export const InvoiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="food" source="food" />
        <NumberInput step={1} label="mileage" source="mileage" />
        <SelectArrayInput
          label="site"
          source="site"
          choices={[
            { label: "Site 1", value: "Site_1" },
            { label: "Site 2", value: "Site_2" },
            { label: "Site 3", value: "Site_3" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput label="stopout" source="stopout" />
        <BooleanInput label="van" source="van" />
      </SimpleForm>
    </Create>
  );
};
