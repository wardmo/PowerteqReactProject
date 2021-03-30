import axios from "axios";


export const api = 'https://jsonplaceholder.typicode.com/';

export const getAlbumData = () => {

    const config = {
        method: 'GET',
        url: api + 'albums',
        withCredentials: false,
    }
    return axios(config)

}

export const UserData =  (username,email)  => {

    const config = {
        method: 'POST',
        url: api + `users?username=${username}&email=${email}`,
      }
     return axios(config)
    
}