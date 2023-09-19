import 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { dark } from '../styles/themes/dark'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const theme: Theme = {
  ...dark,
  ...defaultTheme,
}
