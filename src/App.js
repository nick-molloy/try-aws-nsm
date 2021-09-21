import React from 'react';
import './App.css';
import DisplayPosts from './components/DisplayPosts'
import CreatePost from './components/CreatePost';
import { withAuthenticator } from 'aws-amplify-react'
import {AmplifyAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react'


function App() {
  return (
    <AmplifyAuthenticator>
    <div className="App">
      <CreatePost />
      <DisplayPosts />
    

    </div>
    </AmplifyAuthenticator>
  );
}


export default withAuthenticator(App, 
  { includeGreetings: true});
