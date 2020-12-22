import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Aej6-RfDMJ9kg1hnpdUdDwgT9-A-HcEpol9FMj9ugn4'
    }
});