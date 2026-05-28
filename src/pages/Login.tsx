import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (email === 'admin@test.com' && password === '1234') {
      localStorage.setItem('user', JSON.stringify({ email, role: 'Admin' }))
      navigate('/home')
    } else {
      setError('Email ou mot de passe incorrect')
    }
  }

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5'
    }}>
      <Card title="Connexion" style={{ width: '380px' }}>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px' }}>
            Email
          </label>
          <InputText
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@test.com"
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px' }}>
            Mot de passe
          </label>
          <InputText
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="1234"
            style={{ width: '100%' }}
          />
        </div>

        {error && (
          <p style={{ color: 'red', fontSize: '13px', marginBottom: '1rem' }}>
            {error}
          </p>
        )}

        <Button
          label="Se connecter"
          icon="pi pi-sign-in"
          onClick={handleLogin}
          style={{ width: '100%' }}
        />

      </Card>
    </div>
  )
}

export default Login