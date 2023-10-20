import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../Logo.png"

const Test = () => {
    async function postJSON(data) {
        try {
            const response = await fetch("http://localhost:8090/api/v1/auth/registration", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const data = { name: "example", email: "qwert@gmail.com", password: "11111111" };
    postJSON(data);
    console.log(data);

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
                        <Link className=" text-decoration-none" href="#">TUIT_PRESS</Link>
                    </div>
                    <div className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
                        <Link className='me-3 py-2' href="#" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                        </Link>
                       

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
}

export default Test
