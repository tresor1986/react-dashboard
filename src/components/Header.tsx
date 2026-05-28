interface HeaderProps {
  title: string
}

function Header({ title }: HeaderProps) {
  return (
    <div style={{
      backgroundColor: '#1976d2',
      color: 'white',
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
      <i className="pi pi-th-large" style={{ fontSize: '1.5rem' }}></i>
      <h1 style={{ margin: 0, fontSize: '1.2rem' }}>{title}</h1>
    </div>
  )
}

export default Header