import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator} from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (  
          <Authenticator>
            {({ signOut, user }) => (
              <main>
                <div className="App">
                  <header className="App-header">
                  <button onClick={signOut}>Sign out</button>
                  <h2>USARIO</h2>
                  </header>
                </div>
              </main>
            )}
          </Authenticator>
          
  );
}

export default withAuthenticator(App);