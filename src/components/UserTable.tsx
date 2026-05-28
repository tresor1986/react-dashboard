import { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'

interface User {
  id: number
  nom: string
  role: string
  actif: boolean
}

const fakeApiData: User[] = [
  { id: 1, nom: 'Soule Pekou', role: 'Développeur', actif: true },
  { id: 2, nom: 'Mario Rossi', role: 'Admin', actif: true },
  { id: 3, nom: 'Laura Bianchi', role: 'Viewer', actif: false },
  { id: 4, nom: 'Jean Dupont', role: 'Développeur', actif: true },
  { id: 5, nom: 'Anna Ferrari', role: 'Viewer', actif: false },
]

function UserTable() {
  const [users, setUsers] = useState<User[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simule un appel HTTP (comme ton selectCallback en Angular)
    setTimeout(() => {
      setUsers(fakeApiData)
      setLoading(false)
    }, 1500)
  }, []) // [] = s'exécute une seule fois au montage, comme ngOnInit

  const filtered = users.filter(u =>
    u.nom.toLowerCase().includes(search.toLowerCase()) ||
    u.role.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Utilisateurs</h2>

      <div style={{ marginBottom: '1rem' }}>
        <InputText
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <DataTable value={filtered} stripedRows loading={loading}>
        <Column field="id" header="ID" />
        <Column field="nom" header="Nom" />
        <Column field="role" header="Rôle" />
        <Column field="actif" header="Actif"
          body={(row) => (
            <i className={`pi ${row.actif ? 'pi-check-circle' : 'pi-times-circle'}`}
               style={{ color: row.actif ? 'green' : 'red', fontSize: '1.2rem' }} />
          )}
        />
      </DataTable>
    </div>
  )
}

export default UserTable