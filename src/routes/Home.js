import { addDoc, collection } from '@firebase/firestore';
import React, { useState } from 'react'
import { dbService } from '../fbase';

export default function Home() {
  const [twit, setTwit] = useState("");

  const onChange = (event) => {
    const { target: { value } } = event;
    setTwit(value);

  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, "twit"), {
        twit,
        createAt: Date.now()
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
    </>
  )
}
