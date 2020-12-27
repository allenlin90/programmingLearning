import axios from 'axios';

const KEY = 'AIzaSyBtvThRXE9n-l_Y1jIXhx_EtLitcWbb3kI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});