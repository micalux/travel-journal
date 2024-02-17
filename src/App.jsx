import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

console.log(data)

function App() {
  const cards = data.map(item => {
    return <Card 
            item = {item}
          />
  })
  
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  )
}

export default App
