"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Khalel Abaquin
   Date:   4.2.19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/

//This line of code loads the funtion 'setStyles' every time the page loads.
window.addEventListener("load", setStyles);

//This section of code creates the function 'setStyles', which deals with setting the style rules & sheets.
function setStyles() {
      var styleNum = randInt(5);
      //This block of code creates the element 'link', sets its attributes, appends it to the document head, & stores it in the variable 'sheetLink'.
      var sheetLink = document.createElement("link");
      sheetLink.setAttribute("rel", "stylesheet");
      sheetLink.setAttribute("id", "fancySheet");
      sheetLink.setAttribute("href", "na_style_" + styleNum + ".css");
      document.head.appendChild(sheetLink);
      //This block of code is much alike to the one above it, except the value is stored in the 'figBox' variable & is appended to the element with the id of 'box'.
      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);

      //This block of code sets a different image for the webpage out of 5 different images, depending on which one the user chooses. 
      for (var i = 0; i <= 4; i++) {
            var sheetImg = document.createElement("img");
            sheetImg.setAttribute("src", "na_small_" + [i] + ".png");
            sheetImg.setAttribute("alt", "na_style_" + [i] + ".css");
            sheetImg.addEventListener("click", function (e) {
                  sheetLink.setAttribute("href", e.target.alt);
            });
            figBox.appendChild(sheetImg);
      }

      //This piece of code creates an embedded style sheet, appends it to the head of the document, & stores it inside the variable 'thumbStyles'.
      var thumbStyles = document.createElement("style");
      document.head.appendChild(thumbStyles);

      //These block of code create the css style rules for the web page.
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs { \
                  position: absolute; \
                  left: 0px; \
                  bottom: 0px; \
            }", 0);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img { \
                  outline: 1px solid black; \
                  cursor: pointer; \
                  opacity: 0.75; \
            }", 1);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover { \
                  outline: 1px solid red; \
                  opacity: 1.0; \
            }", 2);
}

function randInt(size) {
      return Math.floor(size * Math.random());
}