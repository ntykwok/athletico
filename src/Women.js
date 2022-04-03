import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { Link } from "react-router-dom";
export default class Women extends Component {
    openNav() {
        document.getElementById("myNav").classList.toggle("menu_width");
        document
            .querySelector(".custom_menu-btn")
            .classList.toggle("menu_btn-style");
      }
    render() {
        return (
        <div>

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
 
    <section class="women_section layout_padding">
        <div class="container">
        <div class="box">
            <div class="row">
            <div class="col-md-6">
                <div class="img-box">
                <img src="assets/images/women-img.png" alt="" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="detail-box">
                <div class="heading_container">
                    <h2>
                    Fashion <br />
                    for women
                    </h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing mod tempor incididunt
                </p>
                <div class="btn-box">
                    <a href="" class="btn1">
                    Buy Now
                    </a>
                    <a href="" class="btn2">
                    See More
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>

    <section className="shopping_cards">
        <h1 >Shopping item to be added
        <br />
        <br />
        </h1>
    </section>
    <section class="cards">
        <div class="card">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jeans-2-1615561459.jpg?crop=0.486xw:0.971xh;0.258xw,0.0160xh&resize=640:*"></img>
            <br />
            <h3>Tailored Jeans</h3>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
        </div>
        <div class="card">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jeans-2-1615561459.jpg?crop=0.486xw:0.971xh;0.258xw,0.0160xh&resize=640:*"></img>
            <br />
            <h3>Tailored Jeans</h3>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
        </div>
        <div class="card">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jeans-2-1615561459.jpg?crop=0.486xw:0.971xh;0.258xw,0.0160xh&resize=640:*"></img>
            <br />
            <h3>Tailored Jeans</h3>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
        </div>
        <div class="card">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jeans-2-1615561459.jpg?crop=0.486xw:0.971xh;0.258xw,0.0160xh&resize=640:*"></img>
            <br />
            <h3>Tailored Jeans</h3>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
        </div>
        <div class="card">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jeans-2-1615561459.jpg?crop=0.486xw:0.971xh;0.258xw,0.0160xh&resize=640:*"></img>
            <br />
            <h3>Tailored Jeans</h3>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
        </div>
        <div class="card">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jeans-2-1615561459.jpg?crop=0.486xw:0.971xh;0.258xw,0.0160xh&resize=640:*"></img>
            <br />
            <h3>Tailored Jeans</h3>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
        </div>
        <div class="card">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jeans-2-1615561459.jpg?crop=0.486xw:0.971xh;0.258xw,0.0160xh&resize=640:*"></img>
            <br />
            <h3>Tailored Jeans</h3>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
        </div>
        <div class="card">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jeans-2-1615561459.jpg?crop=0.486xw:0.971xh;0.258xw,0.0160xh&resize=640:*"></img>
            <br />
            <h3>Tailored Jeans</h3>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
        </div>
        <div class="card">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jeans-2-1615561459.jpg?crop=0.486xw:0.971xh;0.258xw,0.0160xh&resize=640:*"></img>
            <br />
            <h3>Tailored Jeans</h3>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
        </div>
        <div class="card">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jeans-2-1615561459.jpg?crop=0.486xw:0.971xh;0.258xw,0.0160xh&resize=640:*"></img>
            <br />
            <h3>Tailored Jeans</h3>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
        </div>
        
    </section>
   
    <section class="info_section layout_padding">
        <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-4">
            <h5>
                Category
            </h5>
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it overContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it </p>
            </div>
            <div class="col-md-7 offset-md-1 offset-lg-2 col-lg-6">
            <div class="row">
                <div class="col-md-5  ">
                <h5>
                    Useful Links
                </h5>
                <ul>
                    <li>
                    <a href="">
                        Contrary
                    </a>
                    </li>
                    <li>
                    <a href="">
                        to popular belief,
                    </a>
                    </li>
                    <li>
                    <a href="">
                        Lorem Ipsum is
                    </a>
                    </li>
                    <li>
                    <a href="">
                        not simply
                    </a>
                    </li>
                    <li>
                    <a href="">
                        random text. It
                    </a>
                    </li>
                </ul>
                </div>
                <div class="col-md-6">
                <h5>
                    Contact Us
                </h5>
                <div class="info_link-box">
                    <a href="#">
                    <span>+01 1234567890</span>
                    </a>
                    <a href="#">
                    <span>+01 1234567890</span>
                    </a>
                    <a href="#">
                    <span> <span class="__cf_email__">[email&#160;protected]</span></span>
                    </a>
                </div>
                </div>
            </div>
            <div class="info_container">
                <div class="row">
                <div class="col-md-5 ">
                    <h5>
                    Follow Us
                    </h5>
                </div>
                <div class="col-md-6 mb-0">
                    <div class="info_social">
                    <div>
                        <a href="">
                        <img src="assets/images/fb.png" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src="assets/images/twitter.png" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src="assets/images/linkedin.png" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src="assets/images/instagram.png" alt="" />
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
   
    <section class="container-fluid footer_section">
        <p>
        &copy; 2021 All Rights Reserved. Modified by
        <a href=""> Nicholas Kwok</a>
        </p>
    </section>
       
  </div>
  );
} }

