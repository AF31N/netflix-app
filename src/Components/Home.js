import React, { useEffect, useContext } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { useParams } from 'react-router-dom';
import Banner from './Banner/Banner';
import RowPost from './RowPost/RowPost';
import { originals, action, romance, documentaries, horror, comedy } from '../Urls';
import { FirebaseContext } from '../Store/Contex'; // Firebase context for user ID

function Home() {
  const { userId } = useParams(); // Extract userId from the route params
  const { firebase } = useContext(FirebaseContext); // Access Firebase context to retrieve user-specific data

  useEffect(() => {
    // Fetch user-specific data using the userId if needed
    // Example: Fetch user's preferences, history, or customized content
    // Example: Use userId to filter content based on user's preferences
    if (firebase) {
      // Example: Fetch user-specific data using userId
      // firebase.firestore().collection('users').doc(userId).get()...
      console.log(`User ID: ${userId}`);
    }
  }, [userId, firebase]);

  return (
    <div>
      <NavBar />
      <Banner />
      {/* Pass userId to each RowPost to customize content based on user */}
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Actions' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={documentaries} title='Documentaries' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
    </div>
  );
}

export default Home; 



