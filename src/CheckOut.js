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

            <h1> Chechout Page to be made </h1>

            </div>
            );
          } }

