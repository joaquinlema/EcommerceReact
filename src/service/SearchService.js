import http from '../helper/AxiosInstance';

const seccion = 'sites/MLA/search?q=';

const getSearchbyQuery = (query) => {
  return http.get(`${seccion}?${query}`);
};

const SearchService = {
    getSearchbyQuery,
};

export default SearchService;