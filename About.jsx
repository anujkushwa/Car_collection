import React from 'react';

const About = () => {
    return (
        <div className="container mt-5">
            <section id="about" className="text-center p-5 bg-light rounded shadow">
                <h2 className="mb-3">About Us</h2>
                <p className="lead">We are passionate about cars and dedicated to sharing the best collections with enthusiasts worldwide.</p>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <img src="https://f1rstmotors.com/_next/image?url=https%3A%2F%2Ff1rst-motors.s3.me-central-1.amazonaws.com%2Fblog%2F1714771768827-blob&w=3840&q=100" alt="Luxury Car" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <p className="mb-3">Our mission is to provide car lovers with access to an exclusive collection of vintage and modern automobiles. We specialize in showcasing timeless classics and cutting-edge supercars.</p>
                        <p className="mb-3">With years of expertise in the automobile industry, we aim to be your ultimate destination for everything related to cars.</p>
                        <button className="btn btn-dark btn-lg">Learn More</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;