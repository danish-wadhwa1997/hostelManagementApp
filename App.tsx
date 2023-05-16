import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import MainNavigation from './Components/Navigation';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <SafeAreaView style={{height: '100%'}}>
        <MainNavigation />
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
