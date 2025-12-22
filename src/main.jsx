import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import DependencyExample from './Components/Hooks/UseEffect.jsx'
import UseVirtualizedList from './Components/MachineCode/6_VirtualizedList/VirtualizedList.jsx'
import ReactMemo from './Components/Hooks/ReactMemo.jsx'
import UseMemo from './Components/Hooks/UseMemo.jsx'
import UseCallBack from './Components/Hooks/UseCallback.jsx'
import { Provider } from 'react-redux'
import { store } from './ReduxState/store.jsx'
import ReduxComponent from './ReduxState/ReduxComponent/CountComponent.jsx'
import App from './App.jsx'
import ThemeContextProvider from './context/ThemeContext.jsx'


const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 2
    }
  }
})
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        {/* <Demo /> */}
        {/* <Demo /> */}
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
        {/* <ReduxComponent /> */}
      </Provider>
      {/* <Props/> */}
    </QueryClientProvider>
  </BrowserRouter>
  ,
)






