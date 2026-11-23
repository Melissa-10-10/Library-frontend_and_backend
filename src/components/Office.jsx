import { useState } from 'react'
import axios from 'axios'

function Office() {
  const [officeName, setOfficeName] = useState('')
  const [officeNumber, setOfficeNumber] = useState('')

  async function createAccount() {
    try {
      await axios.post('http://localhost:1014/api/office/save', {
        name: officeName,
        officeNumber: Number(officeNumber),
      })

      alert('Office saved successfully!')
    } catch (error) {
      console.error('Error saving office:', error)
      if (error.response) {
        alert(
          'Could not save office. HTTP ' +
            error.response.status +
            ': ' +
            JSON.stringify(error.response.data),
        )
      } else {
        alert('Could not save office: ' + error.message)
      }
    }
  }

  return (
    <div>
      <h1>Save Office</h1>
      <label>Office Name:</label>
      <input type="text" onChange={(e) => setOfficeName(e.target.value)} />
      <br />
      <label>Office Number:</label>
      <input type="text" onChange={(e) => setOfficeNumber(e.target.value)} />
      <br />
      <button onClick={createAccount}>Save</button>
    </div>
  )
}

export default Office
