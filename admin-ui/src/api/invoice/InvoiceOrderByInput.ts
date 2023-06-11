import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  createdAt?: SortOrder;
  food?: SortOrder;
  id?: SortOrder;
  mileage?: SortOrder;
  site?: SortOrder;
  stopout?: SortOrder;
  updatedAt?: SortOrder;
  van?: SortOrder;
};
