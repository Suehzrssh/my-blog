import React, {useEffect, useState} from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { auth, db} from '../firebase-config';
import Moment from 'moment';
import black from '../assets/black.jpg';
import { useNavigate } from 'react-router-dom';

import "../styles/Home.css";

const Home = ({isAuth}) => {
  const [postsList, setPostsList] = useState([]);
  const postCollectionRef = collection(db, "posts");

  let navigate = useNavigate();


  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostsList(data.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      })));
      
    }
    getPosts();

    }, []);

    const deletePost = async (id) => {
      const postDoc = doc(db, "posts", id);
      await deleteDoc(postDoc);

      const data = await getDocs(postCollectionRef);
      setPostsList(data.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      })));
    }
  
  return (
    <div className='homePage'>
      <div className='homeUp'>
        <h1>My Blog</h1>
        <h4>Wellcome to the Blog of <span>Suleyman</span></h4>
      </div>
      <div className='homeMiddle'>
      <div className='homeLeft'>
      {postsList.map((value, key) => {
        return (
          <div key={key} className='postList' >
            <h1>{value.title}</h1>
            <div className='deleteBtn'>
              {!isAuth && value.author.id === auth?.currentUser?.uid
              && 
              <button className='delBtn' onClick={() => {deletePost(value.id)}}>&#128465;</button>}
            </div>
            
            <div className='parags'>
            <h3>{value.description},</h3>
            <p className='date'>{Moment(value.date).format('LL')}</p>
            </div>
            <p className='textarea'>{value.textarea}</p>
            <div className='btnUser'>
              <button
              className='readMore'
              onClick={() => navigate(`/post/${value.id}`)}
              >Read More</button>
              <h4 className='username'>@{value.author.name}</h4>
            </div>
          </div>
        )
      })}
      </div>
      <div className='homeRight'>
        <div className='rightUp'>
          <img src={black} />
          <div className='rightUpInfo'>
          <h2 className='rightH2Title'>Suleyman the magnificent</h2>
          <p className='rightP'> Just me, myself and I, exploring th universe of unknownment. I have a interest of web, apps, blog, article and so on...
             I want to share my skill, my passion and my world with you</p>
          </div>
        </div>
        <div className='lineThrough'></div>
        <div className='rightMiddle'>
          <h1 className='rMH1'>Other Posts</h1>
          {postsList.map((item, key) => {
            return (
              <div key={key} className='rightMiddlePost' onClick={() => navigate(`/post/${item.id}`)}>
                <div className='titles'>
                <h3 className='title'>{item.title}</h3>
                <h4 className='title'>{item.description}</h4>
                </div>
                <p className='rightDate'>{Moment(item.date).format('LL')}</p>
              </div>
              
            )
          })}
        </div>
        <div className='lineThrough'></div>
        <div className='tags'>
        <h2 className='rMH1'>Tags</h2>
        <div className='tagTable'>
          <div className='item it'>HTML</div>
          <div className='item'>CSS</div>
          <div className='item'>JS</div>
          <div className='item'>NodeJS</div>
          <div className='item'>ExpressJS</div>
          <div className='item'>SQL</div>
          <div className='item'>MySQL</div>
          <div className='item'>ReactJS</div>
          <div className='item'>NPM</div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home