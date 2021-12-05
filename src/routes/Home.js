import { addDoc, collection, getDocs, getFirestore, onSnapshot, orderBy, query } from '@firebase/firestore';
import React, { useEffect, useState } from 'react'
import { dbService } from '../fbase';

export default function Home({ userObj }) {
  const [twit, setTwit] = useState("");
  const [userTwit, setUserTwit] = useState([]);

  useEffect(() => {
    const q = query(collection(getFirestore(), 'twit'), 
    orderBy('createAt'));
    const unsubscribe = onSnapshot(q, querySnaphot => {
      const newArray = querySnaphot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
      setUserTwit(newArray);
      console.log('twit', newArray);
    })
    return () => {
      unsubscribe();
    }
  }, [])

  console.log(userTwit);

  const onChange = (event) => {
    const { target: { value } } = event;
    setTwit(value);

  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, "twit"), {
        text: twit,
        createAt: Date.now(),
        createId: userObj.uid
      })
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setTwit("");
  }


  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={twit} onChange={onChange} placeholder="What?" maxLength={120} />
        <input type="submit" value="twit" />
      </form>
      <div>
        {userTwit.map((twit) => (
          <h3 key={twit.id}>
            {twit.text}
          </h3>
        ))}
      </div>
    </>
  )
}
