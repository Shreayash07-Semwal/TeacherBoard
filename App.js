import { useState } from 'react'
import './App.css'
// import Header from './Component/Header'
// import Sidebar from './Component/Sidebar'
import Teacherhome from './Component/Teacherhome'
import Teachernavbar from './Component/Teachernavbar'
import Teachersidebar from './Component/Teachersidebar'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
    // it will change the value of opensidebartoggle if it is true it will change to
    //  false and if it is false it will change to true
  }

  return (
    <div className='grid-container'>
      <Teachernavbar openSidebar={OpenSidebar}/>
      {/* <Header OpenSidebar={OpenSidebar}/> */}
      <Teachersidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Teacherhome />
    </div>
  )
}

export default App

// import React from 'react'
// import {createBrowserRouter,RouterProvider} from 'react-router-dom';
// import Reactrouter from './Component/Reactrouter';
// import A from './Component/A';
// import B from './Component/B';
// export default function App() {
//   const router=createBrowserRouter([
//     {
//       path:"/",
//       element:<><Reactrouter/><A/></>
//     },
//     {
//       path:"/login",
//       element:<><Reactrouter/><B/></>
//     },
// ])
//   return (
//     <div>
//       <RouterProvider router={router}/>
//     </div>
//   )
// }
