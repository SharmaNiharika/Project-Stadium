import Hero from "./components/Hero"
import Navbar from "./components/navbar"
import Testimonial from "./components/testimonial"
import Footer from "./components/footer"
import Main from "./components/main"

const item = {
  img1: "https://png.pngtree.com/png-clipart/20221019/original/pngtree-whatsapp-icon-png-image_8704827.png",
  img2: "https://static.vecteezy.com/system/resources/thumbnails/044/841/357/small_2x/maps-with-location-pointer-free-vector.jpg"
}

function App() {
  return (
    <div className=" ">
   
    <img src={item.img1} alt="" className=" whatsapp h-10 w-10 fixed bottom-20 left-0 z-50 " />
        <img src={item.img2} alt="" className=" whatsapp h-10 w-10 fixed bottom-30 rounded-[3px] left-0 z-50 " />
    
    <Navbar />

    <Hero/> 

     <Testimonial />

     <Main/>

     <Footer/>
    
    
      
    </div>
  )
}

export default App