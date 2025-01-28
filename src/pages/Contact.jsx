import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <h1 className="display-5">Welcome to Contact Page</h1>
                <p className="lead">This is my Contact page.</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;
