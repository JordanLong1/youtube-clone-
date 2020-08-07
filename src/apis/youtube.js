import axios from 'axios'

const KEY = 'AIzaSyDKj2eslJIKpSGCNlIUh_bsrzrWkxkfVjc';


export default axios.create({

//   https://www.googleapis.com/youtube/v3/search

    baseUrl: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5, 
        key: KEY 

    }
})