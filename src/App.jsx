import './App.css'
import './index.css'
import { Navbar } from './components/navbar/navbar'
import { Whatsapp } from './components/whatsapp/whatsapp'
import { Inicio } from './components/inicio/inicio'
import { Proceso } from './components/proceso/proceso'
import { Footer } from './components/footer/footer'
import { Preguntas } from './components/preguntas/preguntas'
import { Servicios } from './components/servicios/servicios'
import { ServiciosAnexos } from './components/servicios/serviciosanexos'
import { EnviarCasos } from './components/enviarcasos/enviarcasos'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Inicio></Inicio>
      <Servicios></Servicios>
      <ServiciosAnexos></ServiciosAnexos>
      <Preguntas></Preguntas>
      <Proceso></Proceso>
      <EnviarCasos></EnviarCasos>
      <Footer></Footer>
      <Whatsapp></Whatsapp>
    </>
  )
}

export default App
