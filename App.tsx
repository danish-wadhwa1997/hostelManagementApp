import React from 'react';
import {SafeAreaView} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
function App(): JSX.Element {
  return (
    <PaperProvider>
      <SafeAreaView>
        {/* <Login /> */}
        <SignUp />
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
