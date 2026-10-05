import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteTodo, getTodo } from '../services/TodoApi'

function Landing() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [deletingId, setDeletingId] = useState(null)

 useEffect(() => {
  getTodo()
    .then((response) => setTodos(response.data))
    .catch(() => setError('Could not load todo items.'))
    .finally(() => setLoading(false))
}, [])


  async function handleDelete(todo) {
    if (!window.confirm(`Delete "${todo.title}"?`)) return

    setDeletingId(todo.id)
    setError('')

    try {
      await deleteTodo(todo.id)
      setTodos((currentTodos) => currentTodos.filter((item) => item.id !== todo.id))
    } catch {
      setError('Could not delete the todo item. Please try again.')
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <main className="min-vh-100 bg-body-tertiary">
      <div className="container py-4 py-md-5">
        <header className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
          <div>
            <h1 className="h2 mb-1">Todo items</h1>
            {!loading && !error && (
              <p className="text-body-secondary mb-0">
                {todos.length} {todos.length === 1 ? 'item' : 'items'}
              </p>
            )}
          </div>
          <Link className="btn btn-primary" to="/add-todo">Add Task</Link>
        </header>

        {loading && <p className="text-body-secondary" role="status">Loading todos...</p>}

        {error && <div className="alert alert-danger" role="alert">{error}</div>}

        {!loading && !error && todos.length === 0 && (
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <p className="mb-0">No todos yet. Add one to get started.</p>
            </div>
          </div>
        )}

        {!loading && !error && todos.length > 0 && (
          <div className="card shadow-sm">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((todo) => (
                    <tr key={todo.id}>
                      <td>{todo.id}</td>
                      <td>{todo.title}</td>
                      <td>
                        <span className={`badge ${todo.status === 'Completed' ? 'text-bg-success' : 'text-bg-warning'}`}>
                          {todo.status}
                        </span>
                      </td>
                      <td>
                        <Link className="btn btn-sm  btn-warning" to={`/edit-todo/${todo.id}`}>
                          Edit
                        </Link>
                        {' '}
                        <button
                          className="btn btn-sm btn-danger"
                          type="button"
                          onClick={() => handleDelete(todo)}
                        >
                          {deletingId === todo.id ? 'Deleting...' : 'Delete'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default Landing
