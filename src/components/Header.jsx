import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="navbar bg-success border-bottom ">
      <div className="container d-flex justify-content-between py-2">
        <div className="d-flex align-items-center gap-2">
          <img src="https://www.creativefabrica.com/wp-content/uploads/2021/09/21/To-do-list-icon-Graphics-17618184-1.jpg" alt="" style={{width:'80px', height:'40px', borderRadius:'10px'}}/>
          <Link className="navbar-brand fw-bold mb-0" to="/">
            Todo List
          </Link>
        </div>
        <nav className="d-flex align-items-center gap-3">
          <Link className="nav-link" to="/todos">Tasks</Link>
          <Link className="btn btn-primary btn-sm" to="/add-todo">Add a task</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
