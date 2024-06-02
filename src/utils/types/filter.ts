import { StatusFilterVariants } from "./statusFilterVariants.types";

interface Filter {
  statusFilter: StatusFilterVariants;
  byTransfers: string[];
}
export default Filter;
