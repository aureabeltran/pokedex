/* eslint-disable quote-props */
import axios from 'axios';
const { GATSBY_POKEAPI_URL } = process.env;

const getHttp = () => {
    let headers = {
        'Content-Type': 'application/json'}
    return axios.create({ baseURL: GATSBY_POKEAPI_URL, headers: headers })
}

export async function getRequest(url){
    const http =  await getHttp()
    let res = await http.get(url).catch((error) => { console.log(error.response); return error.response })
    return res
}
