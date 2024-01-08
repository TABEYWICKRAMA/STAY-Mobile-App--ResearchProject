import {PaginationModel} from './Pagination';

export interface FilterModel {
  paginationDetails: PaginationModel;
  searchParams?: string;
  filterParams?: string;
  filterObj?: {};
}
