const axios = require('axios');
const GIGS_ENDPOINT = 'https://developer.coding-jobs.oyaa.co.ke/new'

const fetchGigs = (limit = 10, page=1) => {
    return axios.get(GIGS_ENDPOINT, {
        params: {
            limit,
            page
        }
    }).then(data => data.data)
}

module.exports = fetchGigs