
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import Moment from 'moment';
import "../styles/Post.css";

const Post = () => {
    let {id} = useParams();
    const [postObj, setPostObj] = useState();
    const docRef = doc(db, "posts", id);

    useEffect(() => {
        const getPost = async () => {
            const docSnap = await getDoc(docRef);
            setPostObj(docSnap.data());
            
        }
        getPost();
    }, []);
  return (
    <div className='postcontainer'>
        <div className='postPart'>
            <h1>{postObj?.title}</h1>
            <div className='parags'>
            <h3>{postObj?.description},</h3>
            <p className='date'>{Moment(postObj?.date).format('LL')}</p>
            </div>
            <p className='textareaP'>{postObj?.textarea}</p>
            <h4 className='usernameP'>@{postObj?.author.name}</h4>
          </div>
        </div>
  )
}

export default Post;