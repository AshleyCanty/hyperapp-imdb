import {h, app} from 'hyperapp'
import Header from './Header.js'
import TopImg from './TopImg.js'
import Content from './Content.js'
import Footer from './Footer.js'

export default function App({state, actions}) {
  return (
    <div class={'app'}>
          <Header state={state} actions={actions} />
          <Content state={state} actions={actions} />
          <Footer state={state} actions={actions} />


    </div>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
