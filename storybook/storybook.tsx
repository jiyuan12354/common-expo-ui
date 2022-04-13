import React, { useEffect } from 'react';
import { getStorybookUI, configure } from '@storybook/react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { IconFont, IconFontProps } from 'common_ui_components/app/components/icon-font/icon-font';
import { color } from 'common_ui_components/app/theme';

declare let module;

configure(() => {
  require('common_ui_components/storybook/storybook-registry');
}, module);

const StorybookUI = getStorybookUI({
  port: 9001,
  host: 'localhost',
  onDeviceUI: true,
  asyncStorage: require('@react-native-async-storage/async-storage').default || null,
});
const Theme = {
  ...DefaultTheme,
  mode: 'exact',
  colors: {
    ...DefaultTheme.colors,
    primary: color.primaryRed,
    secondary: '#414757',
    error: '#f13a59',
    text: color.black,
  },
  padding: {
    tiny: 5,
    small: 10,
    medium: 20,
  },
  margin: {
    tiny: 5,
    small: 10,
    medium: 20,
  },
};
export function StorybookUIRoot() {
  return (
    <PaperProvider
      settings={{
        icon: (props: IconFontProps) => <IconFont {...props} />,
      }}
      theme={Theme}>
      <StorybookUI />
    </PaperProvider>
  );
}
