import Title from './components/Title'
import Section from './components/Section'
import './App.css'

const text = "hii"

function App() {

  return (
    <Section>
      <Title desk={text} />
    </Section>
  )
}

export default App
