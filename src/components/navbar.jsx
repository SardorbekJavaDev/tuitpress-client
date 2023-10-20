import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeItem } from '../helpers/persistance-storage'
import { logoutUser } from '../slice/auth'
import logo from "../Logo.png"

const Navbar = () => {
    const { loggedIn, user } = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logoutUser())
        removeItem('token')
        navigate('/login')
    }

    return (
        <div className="container">
            <header className="border-bottom lh-1 py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <Link to={'/'}>
                            <img width={"100px"} src={logo} alt='' />
                        </Link>
                    </div>
                    <div className="col-4 text-center">
                        <Link className=" text-decoration-none" to={'/'}>TUIT SB</Link>
                    </div>
                    <div className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
                        <Link className='me-3 py-2' href="#" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                        </Link>

                        {loggedIn ? (
                            <>
                                <p className='me-5 border-bottom py-2 m-0 text-dark text-decoration-none'>{user.username}</p>
                                <Link className='me-3 py-2' href="#" aria-label="Search">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                    </svg>
                                </Link>
                                <Link className='me-3 py-2 btn btn-outline-info text-dark text-decoration-none' to={'/create-article'}>
                                    create article
                                </Link>
                                <button className='btn btn-outline-danger' onClick={logoutHandler}>
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link className='btn btn-outline-info me-3 py-2 text-dark text-decoration-none' to={'/login'}>
                                    Sign in
                                </Link>
                                <Link className='btn btn-outline-success me-3 py-2 text-dark text-decoration-none' to={'/register'}>
                                    Sign up
                                </Link>
                            </>
                        )}

                    </div>
                </div>
            </header>

            <div className="nav-scroller py-1 mb-3 border-bottom">
                <nav className="nav nav-underline justify-content-between">
                    <a className="nav-item nav-link link-body-emphasis active" href="#">World</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">U.S.</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Technology</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Design</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Culture</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Business</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Politics</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Opinion</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Science</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Health</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Style</a>
                    <a className="nav-item nav-link link-body-emphasis" href="#">Travel</a>


                </nav>
            </div>
        </div>
    )
    // return (
    // 	<div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3'>
    // 		<Link to={'/'}>
    // 			<img width={"100px"} src={logo} alt='' />
    // 		</Link>

    // 		<nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
    // 			{loggedIn ? (
    // 				<>
    // 					<p className='me-5 border-bottom py-2 m-0 text-dark text-decoration-none'>{user.username}</p>
    // 					<Link className='me-3 py-2 btn btn-outline-info text-dark text-decoration-none' to={'/create-article'}>
    // 						create article
    // 					</Link>
    // 					<button className='btn btn-outline-danger' onClick={logoutHandler}>
    // 						Logout
    // 					</button>
    // 				</>
    // 			) : (
    // 				<>
    // 					<Link className='btn btn-outline-info me-3 py-2 text-dark text-decoration-none' to={'/login'}>
    // 						Sign in
    // 					</Link>
    // 					<Link className='btn btn-outline-success me-3 py-2 text-dark text-decoration-none' to={'/register'}>
    // 						Sign up
    // 					</Link>
    // 				</>
    // 			)}
    // 		</nav>
    // 	</div>
    // )
}

export default Navbar
