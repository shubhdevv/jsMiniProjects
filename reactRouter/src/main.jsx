import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Home from './components/home/home.jsx'
import Layout from './layout.jsx'
import Contact from './components/contactUs/Contact.jsx'
import About from './components/about/about.jsx'
import User from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "/about",
//         element: <About/>
//       },
//       {
//         index: true,
//         element: <Home />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       }

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
       <Route path='about' element={<About />} />
         <Route path='contact' element={<Contact />} />
          <Route path='user/:id' element={<User />} />
          <Route 
          loader={githubInfoLoader}
          path='github' element={<Github/>} />  
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

