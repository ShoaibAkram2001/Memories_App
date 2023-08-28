
import axios from 'axios';

const url='http://localhost:5000/posts';

export const fetch_posts= ()=>axios.get(url);
export const create_post=(data)=> axios.post(url,data);
export const update_post=(id,updatePost)=>axios.patch(`${url}/${id}`,updatePost);
export const delete_post=(id)=>axios.delete(`${url}/${id}`)
export const like_post=(id)=>axios.patch(`${url}/${id}/likePost`);