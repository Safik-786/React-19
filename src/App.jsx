import React, { lazy, Suspense } from 'react'
import Hello from './Hello'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/Home'
import AboutPage, { ServicePage } from './Pages/AboutPage'
import Navbar from './Components/Shared/Navbar'
import Props from './Pages/Props'
import UseConditionalRendering, { DependencyExample } from './Components/Hooks/UseEffect'
import UseRef from './Components/Hooks/UseRef'
import Dashboard from './Pages/Dashboard'
import ProjectPage from './Components/ProjectPage'
import ProjectDetails from './Components/ProjectDetails'
import AllInputFieldsFormReactHookForm from './Components/reactHookForm/AllFieldHandling'
import CRUD_Fetch from './ApiHandling/components/CRUF_Fetch'
import ReactMemo from './Components/Hooks/ReactMemo'
import UseMemo from './Components/Hooks/UseMemo'
import CountComponent from './ReduxState/ReduxComponent/CountComponent'
import CartAppRtk from './rtk/rtkComponent/CartAppRtk'
import ClientPagination from './Components/Optimization/ClientPagination'

import DemoApp from "./DemoApp"
// import CRUD from './Components/CRUD_MockApi'

const HeavyComponent = lazy(() => import('./Components/Optimization/LazyLoading'))

function App() {

  const [showComponent, setShowComponent] = React.useState(false)
  return (
    <div>
      {/* <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="projects/:slug" element={<ProjectDetails />} />
        </Route>
      </Routes> */}
      {/* <Props /> */}

      {/* <CRUD_Fetch /> */}

      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>

      <ReactMemo />

    </div>
  )
}


export default App




export function App2() {
  return (
    <div>

    </div>
  )
}
export function App3() {
  return (
    <div>

    </div>
  )
}
export function App4() {
  return (
    <div>

    </div>
  )
}

// export { App2, App3, App4 }



