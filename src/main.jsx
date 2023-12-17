
import React, {useState} from "react"
import ReactDOM from 'react-dom/client'
import "./style.css"
ReactDOM.createRoot(document.getElementById('root')).render(

<Menu />
)

function Menu(){

const [isOpen , setIsOpen] = useState(false)

const handleIsOpen = () => {
  setIsOpen(true)
}

const handleClose = () => {
  setIsOpen(false)
}


  return <div className='bg-gray-500 flex justify-between px-5 py-6 text-white'>
<h1 className='font-bold text-3xl'>African</h1>

<i style={{display: isOpen === true ? "none" : "" }} onClick={handleIsOpen} class="fa-solid fa-bars sm:hidden absolute right-2 text-4xl"></i>
<i style={{display: isOpen === true ? "block" : "" }} onClick={handleClose} class="fa-solid fa-xmark hidden absolute right-2 text-4xl"></i>

<ul style={{ display: isOpen == true ? "block" : "" }} className='flex hidden sm:flex sm:space-x-12 flex-col sm:flex-row mt-16 space-y-6 sm:mt-0 sm:space-y-0'>
  <li>Home</li>
  <li>Service</li>
  <li>Update</li>
  <li>About Us</li>
</ul>



  </div>
}

export default Menu