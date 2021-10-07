import {xhr} from '../utils';

const moviesServices = {
    getMovies: async (page) => {
        try {
            let params;
            if (page !== null && page > 1) {
                params = {
                    s: 'indonesia',
                    page: page
                }
            } else {
                params = {
                    s: 'indonesia',
                    page: 1
                }
            }
            const dataMovies = await xhr.get(null, {query: params});
            return dataMovies;
        } catch (error) {
            throw error;
        }
    }
}

export default moviesServices;