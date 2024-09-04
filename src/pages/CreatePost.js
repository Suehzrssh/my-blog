import React, {useState, useEffect} from 'react';
import { addDoc, collection } from 'firebase/firestore';
import "../styles/CreatePost.css"
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [textarea, setTextarea] = useState();


  const postCollectionRef = collection(db, "posts");
  let navigate = useNavigate();
  const createPost = async() => {
    await addDoc(postCollectionRef, {
      title, date, description, textarea,
      author:{name: auth.currentUser.displayName,
        id: auth.currentUser.uid },
    });
    navigate('/');
  }

  useEffect(() => {
    if(!isAuth) {
      navigate('/login');
    }
  }, []);
  
  return (
    <div className='postPage'>
      <div className='postContainer'>
      <h2>Create a Post</h2>
      <div className='postTitle'>
        <label>Title: </label>
        <input
        onChange={(e) => setTitle(e.target.value)}
         placeholder='enter the Title....'
          type='text'/>
      </div>
        <div className='desc'>
          <label>Description: </label>
          <input 
          onChange={(e) => setDescription(e.target.value)}
          type='text' 
          placeholder='Blog Description...'/>
        </div>
        
          
          
        
      <div className='post'>
        <label>Post: </label>
        <textarea 
        className='textArea'
        placeholder='Type your Post here...'
        onChange={(e) => setTextarea(e.target.value)}/>
      </div>
      <button className='submitBtn' onClick={createPost}>Submit Post</button>
      <input 
          className='dateInp'
          onChange={(e) => setDate(e.target.value)}
          type='date'/>
      </div>
    </div>
  )
}

export default CreatePost;