import React from 'react'
 

const Contact = () => {
  return (
     <>
      <section className="vh-100" style={{ backgroundColor: "rgb(131 181 166)" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="name" placeholder="Enter your name" className="form-control" autoComplete="off" />
                                                        <label className="form-label" htmlFor="name">Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="email" placeholder="Enter your email" className="form-control" autoComplete="off" />
                                                        <label className="form-label" htmlFor="email">Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="number" id="phone" placeholder="Enter your phone number" className="form-control" autoComplete="off" />
                                                        <label className="form-label" htmlFor="phone">Mobile Number</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-right mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="message" id="message" placeholder="Enter your message" className="form-control" autoComplete="off" />
                                                        <label className="form-label" htmlFor="message">Message</label>
                                                    </div>
                                                </div>

                                                

                                                 

                                                
                                                
                                                 
                                                 
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src=" https://d1csarkz8obe9u.cloudfront.net/posterpreviews/wooden-table-background-with-phone-and-notebo-design-template-de8e56f9c5834dafe7b31a5e0c3f9f81.jpg?ts=1587031128"
                                                className="img-fluid" alt="Registration Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     </>
  )
}

export default Contact