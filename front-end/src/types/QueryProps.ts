import { Movie } from './MovieProps';

export type Query = {
  editorId?: number;
  page?: number;
  size?: number;
  showAll?: boolean;
  sort?: [keyof Movie, 'asc' | 'desc'];
};
