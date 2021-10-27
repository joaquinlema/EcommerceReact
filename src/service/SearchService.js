import mockData from '../actions/test';
import http from '../helper/AxiosInstance';

const seccion = 'sites/MLA/search?q=';

const getSearchbyQuery = (query) => {

    return mockData;
    //INFO: habilitar cuando tengamos acceso a la api
    //  return http.get(`${seccion}?${query}`);
};

const SearchService = {
    getSearchbyQuery,
};

export default SearchService;