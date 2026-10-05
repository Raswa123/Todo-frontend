import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="d-flex align-items-center bg-body-tertiary">
      <div className="container py-5">
        <section className="row justify-content-center text-center">
          <div className="col-12">
            <h1 className="fw-bold text-dark ">To-Do</h1>
            <p className=" text-secondary mb-4">
              Manage Your To-Do List Here....
            </p>
            <Link className="btn btn-primary " to="/todos">
              View your tasks
            </Link>
          </div>
          <div className='mt-5'>
            <img src="https://as2.ftcdn.net/jpg/15/70/44/03/1000_F_1570440316_2FH3HYgxZZFzh1f8qMMs1o5MQS6ZIYEz.jpg" alt="" style={{width:'200px', height:'200px'}}/>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
