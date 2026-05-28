import { useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button'
import Header from '../components/Header'
import UserTable from '../components/UserTable'

function Home() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Header title="Mon Dashboard" />
        <Button
          label="Déconnexion"
          icon="pi pi-sign-out"
          severity="danger"
          onClick={handleLogout}
          style={{ margin: '0 1rem' }}
        />
      </div>
      <UserTable />
    </div>
  )
}

export default Home