export type InvoiceCreateInput = {
  food?: boolean | null;
  mileage?: number | null;
  site?: Array<"Site_1" | "Site_2" | "Site_3">;
  stopout?: boolean | null;
  van?: boolean | null;
};
