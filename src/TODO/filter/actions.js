import { FILTER_SET } from './actionTypes.js';

export const setFilter = (filter) => ({
  type: FILTER_SET,
  filter,
});
