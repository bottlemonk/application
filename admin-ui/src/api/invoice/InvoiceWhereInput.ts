import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InvoiceWhereInput = {
  food?: BooleanNullableFilter;
  id?: StringFilter;
  mileage?: IntNullableFilter;
  stopout?: BooleanNullableFilter;
  van?: BooleanNullableFilter;
};
