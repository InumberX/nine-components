import copyCodeBlock from '@pickra/copy-code-block'
import Templete from '../_components/TestComponent.ejs'
import '../_styles/_test_component.scss'

export default {
 title: 'Test/Component',
 argTypes: {
  text: { control: 'text' },
  text2: { control: 'text' },
 },
}

export const TestComponent = ({ text, text2, ...args }) => {
 return (
  Templete({ tx: text, tx2: text2 }) +
  copyCodeBlock(Templete({ tx: text, tx2: text2 }))
 )
}
TestComponent.args = {
 text: 'Hello ',
 text2: 'World!!',
}
