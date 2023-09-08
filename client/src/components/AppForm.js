import React, { useState,useEffect } from 'react';
import '../styles/AppForm.css'
import { useDispatch,useSelector } from 'react-redux';
import {createPost, updatePost} from '../actions/postAction';
import FileBase from 'react-file-base64';



const AppForm=({currentId,setCurrentId})=>
{
  const post = useSelector((state) => (currentId ? state.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  
 const [postData,setPostData]=useState({
   title:'',
   message:'',
   creator:'',
   tags:'',
   selectedFile:'',

 });

 useEffect(() => {
  if (post) setPostData(post);
}, [post]);


const clear=()=>{
  setPostData({
    title:'',
    message:'',
    creator:'',
    tags:'',
    selectedFile:'',
  })

  setCurrentId(0);
}

const handleImageUpload = (base64) => {
  setPostData({ ...postData, selectedFile: base64 });
};

 const handleSubmit=(e)=>{
e.preventDefault();
if(currentId===0){
  console.log(postData);
  dispatch(createPost(postData));
}

else{
  dispatch(updatePost(currentId,postData));
}

clear();


 }


  return (
    <div className='AppForm_Container'>
     
   <h3>{currentId ? `Editing "${post?.title}"` : 'Creating a Memory'}</h3>
    <form>
        <input type='text' placeholder='Creator' value={post?.creator} required onChange={(e)=>setPostData({...postData, creator :e.target.value})} />
        <input type='text' placeholder='Title'  value={post?.title} required onChange={(e)=>setPostData({...postData,title:e.target.value})} />
        <input type='text' className='message' value={post?.message} placeholder='Message'   required  onChange={(e)=>setPostData({...postData,message:e.target.value})}/>
        <input type='text' placeholder='Tags' required  value={post?.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value})}/>
        
        <div>
        <input
        type='file'
        onChange={(e) => handleImageUpload(e.target.files[0])}
      />
    </div>

        <input className='submit btn'type='submit' value={'Submit'} onClick={handleSubmit}/>
        <input className='clear btn'type='reset' onClick={clear} value={'Clear'} />
    </form>
    </div>
  )
}

export default AppForm;
