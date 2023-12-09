 import React, {useState} from "react";
 import { NavLink, useNavigate  } from "react-router-dom";
 

const Signup = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: " " , email:"" , phone:"", password:"", cpassword:""
    });
    let name,value;
    const handleInputs  = (e)=>{
        console.log(e)
        name = e.target.name;
        value=e.target.value;

        setUser({user,[name]:value});
    }
    let PostData;

    PostData = async (e) =>{
        e.preventDefault();

        const { name, email, phone , password , cpassword} = user;

        const res = await fetch("/register", {

            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({

                name, email, phone , password , cpassword
                 



            })
        })
        const data  = await res.json();
        if(data.status===422  || !data)  {

            window.alert("Invalid Registration");
            console.log("invalid register");
        }else {
            window.alert("registeration sucess");
            console.log("yup done!");


        navigate("/login");
        }





    }



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

                                            <form method="POST" className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="name" placeholder="Enter your name" className="form-control" autoComplete="off" value={user.name} onChange={handleInputs} />
                                                        <label className="form-label" htmlFor="name">Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="email" placeholder="Enter your email" className="form-control" autoComplete="off" value={user.email} onChange={handleInputs} />
                                                        <label className="form-label" htmlFor="email">Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="number" id="phone" placeholder="Enter your phone number" className="form-control" autoComplete="off" value={user.phone} onChange={handleInputs} />
                                                        <label className="form-label" htmlFor="phone">Mobile Number</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="work" placeholder="Enter your profession" className="form-control" autoComplete="off"   />
                                                        <label className="form-label" htmlFor="work">Your Profession</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="password" placeholder="Enter password" className="form-control" autoComplete="off" value={user.password} onChange={handleInputs} />
                                                        <label className="form-label" htmlFor="password">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="cpassword" placeholder="Confirm password" className="form-control" autoComplete="off" value={user.cpassword} onChange={handleInputs} />
                                                        <label className="form-label" htmlFor="cpassword">Confirm password</label>
                                                    </div>
                                                </div>
                                                
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg"  onClick={PostData} >Register</button>
                                                </div>
                                                <div className="text-center text-lg-start mt-4 pt-2">
                                                    <p className="small fw-bold mt-2 pt-1 mb-0">Already Registered? <NavLink to="/login"
                                                        className="link-success">Login</NavLink></p>
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

export default Signup

//associated with registration