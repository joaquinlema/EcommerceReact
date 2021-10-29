import http from '../helpers/AxiosInstance';

const getSearchbyQuery = (query) => {
    return http.get(`sites/MLA/search?q=${query}&limit=5`);
};

const SearchService = {
    getSearchbyQuery,
};

export default SearchService;