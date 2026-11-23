import { useState } from 'react'
import LibraryHome from './components/LibraryHome'
import LoginPage from './components/LoginPage'
import './App.css'

function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      {page === 'home' && <LibraryHome goToLogin={() => setPage('login')} />}
      {page === 'login' && <LoginPage />}
    </>
  )
}

export default App
