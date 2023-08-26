
import axios from 'axios';

const url='http://localhost:5000/posts';

export const fetch_posts= ()=>axios.get(url);
export const create_post=(data)=> axios.post(url,data);