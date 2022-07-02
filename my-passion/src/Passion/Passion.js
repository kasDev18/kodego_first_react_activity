import React from 'react';
import PropTypes from 'prop-types';
import './Passion.css';

function Passion() {
  return (
    <div class="container">
      <div class="row ">
        <div class="col"></div>
        <div class="col-8 shadow p-3 mb-5 bg-body rounded card_container mt-3">
          <div class="col first">
            <img src="images/capture1.png" alt="" width="80px" height="80px" />
            <span><h5>Passion</h5></span>
          </div>
          <a href="guitar.html" class="text-decoration-none">
            <div class="col d-flex pt-3 pb-5 text-dark">
              <div class="col-6 pt-5">
                <h5 class="text-decoration-underline"><b>Playing Musical Instruments</b></h5>
                <div>
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </div>
              </div>
              <div id="carouselExampleFade" class="col carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="images/playing_guitar.jpg" class="d-block" width="380px" height="250px" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="images/benefits-of-playing-piano.jpg" class="d-block" width="380px" height="250px" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="images/playing_flute.jpg" class="d-block" width="380px" height="250px" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </a>
          <a href="food_blog.html" class="text-decoration-none">
            <div class="col d-flex pt-3 pb-5 text-dark">
              <div id="carouselExampleFade" class="col carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="images/maxresdefault.jpg" class="d-block" width="380px" height="250px" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="images/unnamed.jpg" class="d-block" width="380px" height="250px" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="images/food_ranger.jpg" class="d-block" width="380px" height="250px" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="col-6 p-2 pt-5">
                <h5 class="text-decoration-underline"><b>Watching Food Blogs</b></h5>
                <div>
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </div>
              </div>
            </div>
          </a>
          <a href="coding.html" class="text-decoration-none">
            <div class="col d-flex pt-3 pb-5">
              <div class="col-6 p-2 pt-5 text-light">
                <h5 class="text-decoration-underline"><b>Playing Musical Instruments</b></h5>
                <div>
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </div>
              </div>
              <div id="carouselExampleFade" class="col carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="images/online-coding-classes.jpg" class="d-block" width="380px" height="250px" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="images/shutterstock_459867970.jpg" class="d-block" width="380px" height="250px" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="images/1.Learn Coding Online.jpg" class="d-block" width="380px" height="250px" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </a>
          <div></div>
          <div class="col"></div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
}

export default Passion;
