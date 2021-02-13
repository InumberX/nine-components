import copyCodeBlock from '@pickra/copy-code-block'
import Templete from '../_components/TestText.ejs'
import '../_styles/_test_text.scss'

export default {
 title: 'Test/Text',
 argTypes: {
  text: { control: 'text' },
 },
}

export const TestText = ({ text, ...args }) => {
 return Templete({ tx: text }) + copyCodeBlock(Templete({ tx: text }))
}
TestText.args = {
 text: 'Text',
}
