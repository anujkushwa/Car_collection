import React from 'react';

const Collection = () => {
    return (
        <div className="container mt-5">
            <section id="collection" className="text-center p-5 bg-light rounded shadow">
                <h2 className="mb-3">Car Collection</h2>
                <p className="lead">Discover our exclusive range of high-performance, luxury, and classic cars.</p>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <img src="https://media.wired.com/photos/59b0197718550672e9fbdd40/master/w_2560%2Cc_limit/Lamborghini-Aventador-Roadster-TA.jpg" className="card-img-top" alt="Car 1" />
                            <div className="card-body">
                                <h5 className="card-title">Lamborghini Aventador</h5>
                                <p className="card-text">A high-performance sports car with a powerful V12 engine.</p>
                                <button className="btn btn-dark"> <a href="https://en.wikipedia.org/wiki/Rolls-Royce_Phantom" className="btn btn-dark" target="_blank" rel="noopener noreferrer">View Details</a>
                               </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/phantom-series-ii-in-detail/page-properties/01_RR_PHANTOM-single-card-min.jpg/jcr:content/renditions/cq5dam.web.1920.webp" className="card-img-top" alt="Car 2" />
                            <div className="card-body">
                                <h5 className="card-title">Rolls-Royce Phantom</h5>
                                <p className="card-text">A symbol of luxury, elegance, and supreme comfort.</p>
                                <button className="btn btn-dark">View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <img src="https://cdn.dealeraccelerate.com/cam/34/2938/155921/1920x1440/1969-ford-mustang-coupe" className="card-img-top" alt="Car 3" />
                            <div className="card-body">
                                <h5 className="card-title">Ford Mustang 1969</h5>
                                <p className="card-text">A timeless American muscle car with unmatched performance.</p>
                                <button className="btn btn-dark">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Collection;
