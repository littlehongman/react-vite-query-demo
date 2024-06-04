import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { QueryClient, QueryClientProvider} from 'react-query';
import DemoForm from './form';
import User from './user';


export const queryClient = new QueryClient();

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <DemoForm/>
        <User/>
      </>
    </QueryClientProvider>
  )
}

export default App
