import { useEffect, useState } from 'react'
import axios from 'axios'
import './OfficeList.css'

function OfficeList() {
  const [offices, setOffices] = useState([])
  const [search, setSearch] = useState('')

  // Load all offices when the page opens
  useEffect(() => {
    async function loadOffices() {
      try {
        const response = await axios.get('http://localhost:1014/api/office/all')
        setOffices(response.data)
      } catch (error) {
        alert('Could not load offices: ' + error.message)
      }
    }
    loadOffices()
  }, [])

  // Delete one office, then remove it from the table
  async function deleteOffice(id) {
    if (!window.confirm('Delete this office?')) {
      return
    }
    try {
      await axios.delete('http://localhost:1014/api/office/delete/' + id)
      setOffices(offices.filter((office) => office.id !== id))
    } catch (error) {
      alert('Could not delete office: ' + error.message)
    }
  }

  // Search by office name or office number
  const filteredOffices = offices.filter(
    (office) =>
      office.name.toLowerCase().includes(search.toLowerCase()) ||
      String(office.officeNumber).includes(search),
  )

  return (
    <div>
      <h1>Offices</h1>

      <label>Search:</label>
      <input
        type="text"
        placeholder="Office name or office number"
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="office-table">
        <thead>
          <tr>
            <th>Office Name</th>
            <th>Office Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredOffices.map((office) => (
            <tr key={office.id}>
              <td>{office.name}</td>
              <td>{office.officeNumber}</td>
              <td>
                <button>Update</button>
                <button onClick={() => deleteOffice(office.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OfficeList