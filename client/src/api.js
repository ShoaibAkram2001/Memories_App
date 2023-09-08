
import axios from 'axios';

const API=axios.create({baseURL:"http://localhost:5000"})
const url='posts';

export const fetch_posts= ()=>API.get('/posts');
export const create_post=(data)=> API.post('/posts',data);
export const update_post=(id,updatePost)=>API.patch(`posts/${id}`,updatePost);
export const delete_post=(id)=>API.delete(`posts/${id}`)
export const like_post=(id)=>API.patch(`posts/${id}/likePost`);

export const signIn=(FormData)=>API.post(`/users/signin`,FormData); 
export const signUp=(FormData)=>API.post(`/users/signup`,FormData); 