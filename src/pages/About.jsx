import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
    return (
        <div className="container py-5">
            <div className="text-center">
                <h1 className="display-4 mb-4">Welcome to About Page</h1>
                <p className="lead">This is my About page where you can learn more about us.</p>
            </div>

            <div className="row align-items-center py-4">
                <div className="col-md-6">
                    <h2 className="h3">About Our Website</h2>
                    <p>
                        Our platform provides amazing resources and features to help you achieve your goals.
                        Explore our services and let us know how we can assist you further.
                    </p>
                </div>
                <div className="col-md-6">
                    <img
                        src="https://lic-pension-plans.com/wp-content/uploads/2020/07/about-us-for-LIC-pension-plans.jpg"
                        alt="Homepage example"
                        className="img-fluid rounded"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
