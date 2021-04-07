import "./style.css"
import Header from"./components/Header.js"
import Landing from "./components/Landing"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Footer from "./components/Footer"
function App() {

  return (

   <div>

    <div className="main">
      <Header></Header>
      <Landing></Landing>
      <Hero></Hero>
      <Products></Products>
      <Footer></Footer>
    </div>
    </div>
  )
}

export default App;
