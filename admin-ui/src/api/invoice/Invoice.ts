export type Invoice = {
  createdAt: Date;
  food: boolean | null;
  id: string;
  mileage: number | null;
  site?: Array<"Site_1" | "Site_2" | "Site_3">;
  stopout: boolean | null;
  updatedAt: Date;
  van: boolean | null;
};
