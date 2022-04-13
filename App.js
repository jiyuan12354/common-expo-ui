import React, { useEffect } from 'react';
import { StorybookUIRoot } from './storybook/storybook';
import * as Font from 'expo-font';

export const initFonts = async () => {
  await Font.loadAsync({
    iconfont: require('common_ui_components/app/components/icon-font/fonts/iconfont.ttf'),
  });
};
export default function App() {
  useEffect(() => {
    (async () => {
      await initFonts(); // expo
    })();
  }, []);
  return <StorybookUIRoot />;
}
