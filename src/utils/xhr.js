/**
 * created by : Risyandi
 * 2021
 */

import axios from 'axios';
import {ENDPOINT_URL} from '../constant'

function baseAxios(options) {
    const headers = {
        ...options.headers,
    }

    return axios.create({
        baseURL: `${ENDPOINT_URL}`,
        timeout: options.timeout || 30000,
        headers,
    })
}

function executeRequest(method, pathname, data, options = {}) {
    const body = method === 'get' || !data ? {} : {
        data
    }
    const reqObj = {
        url: pathname,
        method,
        params: options.query,
        ...body,
    }
    const baseAxiosRequest = baseAxios(options)
    const xhr = new Promise((resolve, reject) => {
        baseAxiosRequest
            .request(reqObj)
            .then(res => {
                resolve(res.data)
            })
            .catch(async (error) => {
                const res = error.response
                const status = res ? res.status : ''
                if (res &&
                    res.data &&
                    res.data.message) {
                    error = res.data
                }
                console.log('HTTP ERROR: ', `msg: ${error.message}, code: ${status}`)
                reject(error)
            })
    })

    return xhr
}

export const xhr = {
    async get(pathname, options) {
        return executeRequest('get', pathname, null, options);
    },

    async post(pathname, data, options) {
        return executeRequest('post', pathname, data, options);
    },

    async put(pathname, data, options) {
        return executeRequest('put', pathname, data, options);
    },

    async delete(pathname, data, options) {
        return executeRequest('delete', pathname, data, options);
    },

    all(promises) {
        return Promise.all(promises);
    },
}