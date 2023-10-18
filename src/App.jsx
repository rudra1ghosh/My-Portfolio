import { BrowserRouter } from "react-router-dom";
import {About, Contact, Education, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer} from './components';


const App=()=> {

  return (

   <BrowserRouter>
   <div className="relative bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center" >
<Navbar/>
<Hero/>
    </div>
   </div>
   <div  style={{backgroundColor:"#101127"}}>
   <About/>
   <Education/>
   <Tech/>
   <Works />
   </div>
   <div className="relative z-0">
    <Contact />
    <StarsCanvas />

   </div>
   <div className="relative bg-primary">
    <Footer/>
    </div>
   
   </BrowserRouter>
  )
}

export default App
