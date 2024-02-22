import UsersList from './Components/UserList'
import UserDetails from './Components/UserDetails'
import Home from './Components/Home'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'


function App() {

  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path='/' element= {<Home />}/>
          <Route path='/users' element= {<UsersList />}/>
          <Route path='/users/:userId' element={<UserDetails />} />
        </Routes>
      </ChakraProvider>
    </>
  )
}

export default App
