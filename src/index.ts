import FText from './components/FText'
import FImage from './components/FImage'
import FShape from './components/FShape'
import FinalPage from './components/FinalPage'
const components = [ 
  FText,
  FImage,
  FShape,
  FinalPage
]

const install = (app: any) => { 
  components.map(component => {
    app.use(component)
  })
}

export { 
  install,
  FText,
  FImage,
  FShape,
  FinalPage
}

export default {
  install
}