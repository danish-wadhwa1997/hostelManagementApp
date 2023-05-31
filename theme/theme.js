import * as lightTheme from './LightTheme.json';
import * as darkTheme from './DarkTheme.json';

export const getTheme = colorScheme => {
  console.log(lightTheme.colors, darkTheme.colors);
  if (colorScheme === 'dark') {
    return darkTheme.colors;
  }
  return lightTheme.colors;
};
