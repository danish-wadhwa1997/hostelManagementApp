import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import MainNavigation from './Components/Navigation';
import {TokenProvider} from './Components/Context/TokenContext';
import {AuthProvider} from './Components/Context/AuthContext';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <AuthProvider>
        <TokenProvider>
          <SafeAreaView style={{height: '100%'}}>
            <MainNavigation />
          </SafeAreaView>
        </TokenProvider>
      </AuthProvider>
    </PaperProvider>
  );
}

export default App;
