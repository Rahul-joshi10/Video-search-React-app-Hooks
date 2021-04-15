import axios from 'axios';

const KEY = "AIzaSyCSTjdLVVss-_0D1VlhqEaGR-I_nrDQFQI";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

