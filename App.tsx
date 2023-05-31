import React from 'react';
import {SafeAreaView, Appearance} from 'react-native';
import {Provider as PaperProvider, MD3LightTheme} from 'react-native-paper';
import MainNavigation from './Components/Navigation';
import {TokenProvider} from './Components/Context/TokenContext';
import {AuthProvider} from './Components/Context/AuthContext';
import {getTheme} from './theme/theme';

const colorScheme = Appearance.getColorScheme();
const theme = {...MD3LightTheme, colors: getTheme(colorScheme)};
function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
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
