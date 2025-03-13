import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5">
      <section id="home" className="text-center p-5  text-black rounded shadow"  style={{ background: 'linear-gradient(to right, #8f6fbc, #ffffff)' }}>
        <h2 className="mb-3">Welcome to Our Car Collection</h2>
        <p className="lead">Explore a wide range of classic and modern cars. Find your dream car today!</p>
        <div className="row mt-4">
          <div className="col-md-6">
            <img src="https://media.cdn-jaguarlandrover.com/api/v2/images/103941/w/1600/h/650.jpg" alt="Car Showcase" className="img-fluid rounded" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <p className="mb-3">Our collection includes rare vintage classics and the latest luxury models, all curated with precision.</p>
            <button className="btn btn-light bg-white btn-lg">View Collection</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;