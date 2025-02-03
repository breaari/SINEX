import './App.css'
import './index.css'
import { Navbar } from './components/navbar/navbar'
import { Whatsapp } from './components/whatsapp/whatsapp'
import { Inicio } from './components/inicio/inicio'
import { Proceso } from './components/proceso/proceso'
import { Contacto } from './components/contacto/contacto'
import { Footer } from './components/footer/footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Inicio></Inicio>
      <Proceso></Proceso>
      <Contacto></Contacto>
      <Footer></Footer>
      <Whatsapp></Whatsapp>
    </>
  )
}

export default App
