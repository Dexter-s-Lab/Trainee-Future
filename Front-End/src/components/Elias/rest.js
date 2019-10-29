import React, { Component } from "react";
import "./baraa.css";

const rest = () => {
  return (
    <div className="container-fluid">
      {/* Header */}
      <header
     
      >
        <div style={{ height: "890px", marginTop: "80px" }}>
          <div className="header-content">
            <h1 style={{ marginTop: "600px", color: "#e6e6e6" }}>
              Engage With Us
            </h1>
            <h3 style={{ marginTop: "20px", color: "#e6e6e6" }}>
              For the things we have to learn before we can do them, we learn by
              doing them.
            </h3>
          </div>
        </div>
      </header>
      <section className="content">
        <div className=" ">
          <div className="row">
            <div className="col-sm-6">
              <img
                className="img-responsive img-circle center-block"
                src="https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto"
                alt=""
                style={{ width: "80%", height: "650px" }}
              />
            </div>
            <div className="col-sm-6">
              <h1 className="section-header" style={{
                  textAlign: "center",
                  marginRight: "100px",
                  marginTop: "150px",
                  fontWeight: "bolder"
                }} >Share in our stories</h1>
              <blockquote class="blockquote mb-0">
                <h3>
                  “Tell me and I forget, teach me and I may remember, involve me
                  and I learn.”
                </h3>
                <footer class="blockquote-footer">
                  <h5>
                    <cite title="Source Title">Benjamin Franklin</cite>
                  </h5>
                </footer>
              </blockquote>
        
            </div>
          </div>
        </div>
      </section>
      {/* Content 2 */}
      <section
        className="content content-2"
        style={{
          height: "700px",
          paddingTop: "28px",
          paddingBottom: "30px",
          backgroundColor: "#482f5b"
        }}
      >
        <div>
          <div className="row">
            <div className="col-sm-6">
              <h2
                className="section-header"
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "40px",
                  marginTop: "70px",
                  marginLeft: "10%"
                }}
              >
                Our Vision
              </h2>
              <p
                className="lead text-light text-center "
                style={{ marginLeft: "60px", marginTop: "160px" }}
              >
                Taking vision seriously, we believe everyone deserves to enjoy
                great journey. If that’s a belief you share, you’ll find we’re
                also serious about your training supporting your ambitions,
                encouraging your development and both recognising and rewarding
                the part you play in your training.
              </p>
            </div>
            <div className="col-sm-6">
              <img
                className="img-responsive img-circle center-block"
                src="https://images.unsplash.com/photo-1516554344860-089511650386?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt=""
                style={{ width: "80%", height: "650px" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="content content-3" style={{ marginTop: "50px" }}>
        <div className="">
          <div className="row">
            <div className="col-sm-6">
              <img
                className="img-responsive img-circle center-block"
                src="https://gratisography.com/thumbnails/gratisography-326-thumbnail.jpg"
                alt=""
                style={{ width: "85%", height: "650px" }}
              />
            </div>
            <div className="col-sm-6">
              <h2 className="section-header" 
              style={{
                textAlign: "center",
                marginRight: "100px",
                fontWeight: "bolder",
                marginTop: "90px"
              }} >We’ve been looking for you!</h2>
              <p className="lead text-muted" style={{marginTop:"50px" , fontWeight: "bold"}}>
                Everyone has unique, God-given abilities. Use yours to make the
                world a brighter place.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Promos */}
      <div >
        <div className="promo">
          <a href="/#">
            <div className="col-md-12 promo-item item-1 ">
              <h3>Success</h3>
            </div>
          </a>
          <a href="/#">
            <div className="col-md-12 promo-item item-2 ">
              <h3>Future</h3>
            </div>
          </a>
          <a href="/#">
            <div className="col-md-12 promo-item item-3 ">
              <h3>Acheive</h3>
            </div>
          </a>
        </div>
      </div>
      {/* /.container-fluid-fluid */}
      {/* Content 3 */}
      <section className="content content-3">
        <div>
          <h2 className="section-header">
            <span className="glyphicon glyphicon-pushpin text-primary" style={{ marginTop: "50px" }} />
            <br /> Who We Are
          </h2>
          <p className="lead text-muted">
            We are people who want to make training procedure easier for each, companies and trainees.
          </p>

        </div>
      </section>
      {/* Footer */}

       
        <footer>
          <div className="  bg-primary py-3">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="row py-0">
                    <div className="col-sm-1 hidden-md-down">
                      <a className="bg-circle bg-info" href="/#" style={{marginTop:"10px"}}>
                        <em
                          className="fa fa-2x fa-fw fa-address-card"
                          aria-hidden={true}
                          
                        ></em>
                      </a>
                    </div>
                    <div className="col-sm-11 text-white">
                      <div style={{marginLeft:"20px"}}>
                        <h4>  Contact Us</h4>
                        <p>
                             <span href="#">Dexter.com </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="d-inline-block">
                    <div
                      className="bg-circle-outline d-inline-block"
                      style={{
                        backgroundColor: "#3b5998",
                        textAlign: "center",
                        marginLeft:"20px"
                      }}
                    >
                      <a href="https://www.facebook.com/" style={{}}>
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div
                      className="bg-circle-outline d-inline-block"
                      style={{
                        backgroundColor: "#4099FF",
                        textAlign: "center",
                        marginLeft:"20px"
                      }}
                    >
                      <a href="https://twitter.com/">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>

                    <div
                      className="bg-circle-outline d-inline-block"
                      style={{
                        backgroundColor: "#0077B5",
                        textAlign: "center",
                        marginLeft:"20px"
                      }}
                    >
                      <a href="https://www.linkedin.com/company/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <div
                      className="bg-circle-outline d-inline-block"
                      style={{
                        backgroundColor: "#d34836",
                        textAlign: "center",
                        marginLeft:"20px"
                      }}
                    >
                      <a href="https://www.google.com/">
                        <i className="fab fa-google"></i>
                      </a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-center">
              {" "}
              Copyright © Trainee Future. All right reserved.{" "}
            </p>
          </div>
        </footer>
     
    </div>
  );
};
export default rest;

// #10660e
//#10660e
