// Week 5, Day 4

var body = document.body;

var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "main");
body.appendChild(mainDiv);

var contentDivOfMainDiv = document.createElement("div");
contentDivOfMainDiv.setAttribute("id", "content");
mainDiv.appendChild(contentDivOfMainDiv);

var contentPostDivOfContentDiv = document.createElement("div");
contentPostDivOfContentDiv.setAttribute("class", "content-post");
contentDivOfMainDiv.appendChild(contentPostDivOfContentDiv);

var h1 = document.createElement("h1");
var h1Text = document.createTextNode("Judul Post");
h1.appendChild(h1Text);
contentPostDivOfContentDiv.appendChild(h1);

var span = document.createElement("span");
var spanText = document.createTextNode("Published on 12 May 2016");
span.appendChild(spanText);
contentPostDivOfContentDiv.appendChild(span);

var pOfContentPostDiv = document.createElement("p");
var pOfContentPostDivText = document.createTextNode("Lorem Ipsum Dolor Sit Amet");
pOfContentPostDiv.appendChild(pOfContentPostDivText);
contentPostDivOfContentDiv.appendChild(pOfContentPostDiv);

var buttonOfContentPostDiv = document.createElement("button");
var buttonOfContentPostDivText = document.createTextNode("Share this Post");
buttonOfContentPostDiv.setAttribute("class", "share-post-btn");
buttonOfContentPostDiv.appendChild(buttonOfContentPostDivText);
buttonOfContentPostDiv.addEventListener("click", function() {
  alert("You have shared this post!");
});
contentPostDivOfContentDiv.appendChild(buttonOfContentPostDiv);


var contentPostDivOfContentDiv2 = document.createElement("div");
contentPostDivOfContentDiv2.setAttribute("class", "content-post");
contentDivOfMainDiv.appendChild(contentPostDivOfContentDiv2);

var h1_2 = document.createElement("h1");
var h1_2Text = document.createTextNode("Judul Post 2");
h1_2.appendChild(h1_2Text);
contentPostDivOfContentDiv2.appendChild(h1_2);

var span2 = document.createElement("span");
var span2Text = document.createTextNode("Published on 13 May 2016");
span2.appendChild(span2Text);
contentPostDivOfContentDiv2.appendChild(span2);

var p2OfContentPostDiv = document.createElement("p");
var p2OfContentPostDivText = document.createTextNode("Lorem Ipsum Dolor Sit Amet");
p2OfContentPostDiv.appendChild(p2OfContentPostDivText);
contentPostDivOfContentDiv2.appendChild(p2OfContentPostDiv);

var button2OfContentPostDiv = document.createElement("button");
var button2OfContentPostDivText = document.createTextNode("Share this Post");
button2OfContentPostDiv.setAttribute("class", "share-post-btn");
button2OfContentPostDiv.appendChild(button2OfContentPostDivText);
button2OfContentPostDiv.addEventListener("click", function() {
  alert("You have shared this post!");
});
contentPostDivOfContentDiv2.appendChild(button2OfContentPostDiv);
