import { useState } from 'react'
import Office from './components/Office'
import OfficeList from './components/OfficeList'

function App() {
  const [page, setPage] = useState('list')

  return (
    <div>
      <button onClick={() => setPage('list')}>Offices</button>
      <button onClick={() => setPage('save')}>Save Office</button>

      {page === 'list' && <OfficeList />}
      {page === 'save' && <Office />}
    </div>
  )
}

export default App