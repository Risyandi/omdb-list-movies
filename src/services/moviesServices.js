import {
    xhr
} from '../utils';

const moviesServices = {
    getMovies: async (page, search) => {
        try {
            let params;
            if (page !== null && page > 1) {
                params = {
                    s: search,
                    page: page
                }
            } else {
                params = {
                    s: search,
                    page: 1
                }
            }
            const dataMovies = await xhr.get(null, {
                query: params
            });
            return dataMovies;
        } catch (error) {
            throw error;
        }
    },
    getMoviesDetail: async (id) => {
        try {
            let params;
            params = {
                i: id,
                plot: 'full'
            }
            const dataMoviesDetail = await xhr.get(null, {
                query: params
            });
            return dataMoviesDetail;
        } catch (error) {
            throw error;
        }
    }
}

export default moviesServices;