import Hero from "./components/Hero"
import Navbar from "./components/navbar"

const item = {
  img1: "https://png.pngtree.com/png-clipart/20221019/original/pngtree-whatsapp-icon-png-image_8704827.png"
}

function App() {
  return (
    <div className="bg-black ">

    <img src={item.img1} alt="" className=" whatsapp h-10 w-10 fixed bottom-20 left-0 z-50 " />
    
    <Navbar />
    <Hero/> 
      
    </div>
  )
}

export default App