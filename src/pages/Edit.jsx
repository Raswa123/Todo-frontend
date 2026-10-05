import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getTodoById, updateTodo } from '../services/TodoApi'

function Edit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('Pending')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [loadError, setLoadError] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    getTodoById(id)
      .then((response) => {
        if (!active) return
        setTitle(response.data.title)
        setStatus(response.data.status)
      })
      .catch(() => {
        if (active) setLoadError('Could not load this todo.')
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [id])

  async function handleSubmit(event) {
    event.preventDefault()
    setSaving(true)
    setError('')

    try {
      await updateTodo(id, { title: title.trim(), status })
      navigate('/todos')
    } catch {
      setError('Could not update this todo. Check that the backend is running and try again.')
      setSaving(false)
    }
  }

  return (
    <main className="min-vh-100 bg-body-tertiary">
      <div className="container py-4 py-md-5">
        <header className="d-flex justify-content-between align-items-center mb-5">
          <Link className="btn btn-outline-secondary" to="/todos">All todos</Link>
        </header>

        <div className="row justify-content-center">
          <section className="col-12 col-md-8 col-lg-6 col-xl-5">
            <h1 className="h2 mb-4">Edit todo</h1>

            {loading && <p className="text-body-secondary" role="status">Loading todo...</p>}

            {!loading && loadError && (
              <div className="alert alert-danger" role="alert">{loadError}</div>
            )}

            {!loading && !loadError && (
              <form className="card shadow-sm" onSubmit={handleSubmit}>
                <div className="card-body p-4">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="todo-title">To-do item</label>
                    <input
                      autoFocus
                      className="form-control"
                      id="todo-title"
                      name="title"
                      type="text"
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                      maxLength={120}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="todo-status">Status</label>
                    <select
                      className="form-select"
                      id="todo-status"
                      name="status"
                      value={status}
                      onChange={(event) => setStatus(event.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>

                  {error && <div className="alert alert-danger mb-3" role="alert">{error}</div>}

                  <div className="d-flex justify-content-end gap-2 mt-4">
                    <Link className="btn btn-outline-secondary" to="/todos">Cancel</Link>
                    <button
                      className="btn btn-success"
                      type="submit"
                      
                    >
                      {saving ? 'Saving...' : 'Save changes'}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}

export default Edit
