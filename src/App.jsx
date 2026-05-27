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

  const [showComponent, setShowComponent] = React.useState(false)
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


