import { addDecorator } from '@storybook/html'
import { withA11y } from '@storybook/addon-a11y'
import { addParameters } from '@storybook/html'
import { themes } from '@storybook/theming'

addDecorator(withA11y)

const customViewports = {
 iPhone5: {
  name: 'iPhone5',
  styles: {
   width: '320px',
   height: '568px',
  },
 },
 iPhone6: {
  name: 'iPhone6,7,8',
  styles: {
   width: '375px',
   height: '667px',
  },
 },
 iPhoneX: {
  name: 'iPhoneX',
  styles: {
   width: '375px',
   height: '812px',
  },
 },
 iPhoneXsMax: {
  name: 'iPhoneXsMax',
  styles: {
   width: '414px',
   height: '896px',
  },
 },
}

addParameters({
 viewport: { viewports: customViewports },
})

addParameters({
 darkMode: {
  dark: { ...themes.dark, appBg: 'black' },
  light: { ...themes.normal, appBg: 'white' },
 },
})

export const parameters = {
 actions: { argTypesRegex: '^on[A-Z].*' },
}
