// import React, { useState } from 'react'
// import Navbar from './Components/Shared/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import HomePage from './Pages/HomePage'
// import AboutPage, { ServicePage } from './Pages/AboutPage'
// import Dashboard from './Pages/Dashboard'
// import TaskPage from './Pages/TaskPage'
// import ProjectPage from './Pages/ProjectPage'
// import SubTaskPage from './Pages/SubTaskPage'
// import TaskDetailsPage from './Pages/TaskDetailsPage'
// import UseSearchParams from './Components/Routing/UseSearchParams'
// import ProtectedRoute from './Guards/ProtectedRoute'
// import Login from './Components/Shared/Login'
// import HashNavigationPage from './Pages/HashNavigationPage'
// import ApiCalls from './Pages/ApiCalls'
// import FetchData from './Components/FetchData'
// import { AllPropsExample } from './Pages/Props'
// import ListRendering from './Pages/ListRendering'
// import DependencyExample from './Components/Hooks/UseEffect'
// import Crud from './ApiHandling/components'
// import VintagePastelHomepage from './4Ever/Home'
// import VintagePastelHomepage2 from './4Ever/Home2'
// import ProductionEcommerce from './4Ever/Home3'
// import UseRef from './Components/Hooks/UseRef'
// import ReactMemo from './Components/Hooks/ReactMemo'
// import UseCallBack from './Components/Hooks/UseCallback'
// import SSG from './fetch/SSG'
// import UseParams from './Components/Routing/UseParams'

// function App() {
//   return (
//     <div >
//       {/* <Demo/> */}
//       <Navbar />
//       <Routes>
//         <Route path='/home' element={<HomePage />} />
//         <Route path='/about' element={<AboutPage />} />
//         {/* <Route path='/services' element={<ServicePage />} /> */}
//         <Route path='/settings' element={<AboutPage />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/ssg' element={<SSG />} />
//         <Route path='/posts/:id' element={<UseParams />} />

//         <Route path='/dashboard' element={
//           // <ProtectedRoute>
//             <Dashboard />
//           // </ProtectedRoute>
//         }>
//           <Route index element={<ProjectPage />} />
//           <Route path='tasks/:id' element={<TaskDetailsPage />} />
//           <Route path='tasks' element={<TaskPage />} />
//           <Route path='subtasks' element={<SubTaskPage />} />
//           <Route path='searchparams' element={<UseSearchParams />} />
//           <Route path='hashnavigation' element={<HashNavigationPage />} />
//         </Route>
//       </Routes>


//     </div>
//   )
// }

// export default App


import React, { Component, lazy, Suspense } from 'react'
import DemoApp from './DemoApp'
import AllPropsExample from './Pages/Props'
import RtkCounter from './rtk/rtkComponent/RtkCounter'
import CartApp from './rtk/rtkComponent/CartApp'
import { UseConditionalRendering } from './Components/Hooks/UseEffect'
import CountComponent from './ReduxState/ReduxComponent/CountComponent'
import CRUDTanstack from './tanstack/crud/CRUDTanstack'
import UseModal from './Modal/UseModal'
import UseContext from './Components/Hooks/useContext'
import AllInputFieldsForm from './Components/reactHookForm/AllFieldHandling'
// import CountComponent from './ReduxState/ReduxComponent/CountComponent'

const LazyComponent = lazy(() => import('./Components/Optimization/LazyLoading'))

function App() {
  return (
    <div className='px-10'>
      {/* <UseModal /> */}

      {/* <Suspense fallback={"Loader...."}>
        <LazyComponent/>
      </Suspense> */}
      <AllInputFieldsForm />
      {/* <UseConditionalRendering /> */}
    </div>
  )
}

export default App


