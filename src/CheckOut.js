import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { Link } from "react-router-dom";



export default class CheckOut extends Component {
        openNav() {
            document.getElementById("myNav").classList.toggle("menu_width");
            document
                .querySelector(".custom_menu-btn")
                .classList.toggle("menu_btn-style");
          }
        render() {
            return (<div> 
        <div class="hero_area">
        <div class="logo_box">
            <a class="navbar-brand" href="#">
            <span>
            Athletico
            </span>
            </a>    
        </div>
       
        <section class=" slider_section position-relative">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">01</li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
            </ol>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="detail-box">
                <h1>
                    The <br />
                    Semester <br />
                    is coming to <br />
                    the end
                </h1>
                </div>
            </div>
            <div class="carousel-item">
                <div class="detail-box">
                <h1>
                    I <br />
                    am <br />
                    f**king <br />
                    tired
                </h1>
                </div>
            </div>
            <div class="carousel-item">
                <div class="detail-box">
                <h1>
                    Can <br />
                    you <br />
                    guys find <br />
                    a slogan?
                </h1>
                </div>
            </div>
            </div>
        </div>
        </section>
      
        <div class="menu_box">
        <div class="navbar-collapse" id="">
            <div class="custom_menu-btn">
            <button onClick={this.openNav}>
                <span class="s-1"> </span>
                <span class="s-2"> </span>
                <span class="s-3"> </span>
            </button>
            </div>
            <div id="myNav" class="overlay">
            <div class="overlay-content">
                <Link to="/">Home</Link>
                <Link to="/Men">Men</Link>
                <a href="">Women</a>
                <Link to="CheckOut">Buy Now</Link>
            </div>
            </div>
        </div>
        
        <div class="social_container">
            <div class="social-box">
            <div>
                <a href="">
                <img src="assets/images/fb-top.png" alt="" />
                </a>
            </div>
            <div>
                <a href="">
                <img src="assets/images/instagram-top.png" alt="" />
                </a>
            </div>
            </div>
        </div>
        </div>
        </div>


            <h1> Chechout Page to be made </h1>

            </div>
            );
          } }

