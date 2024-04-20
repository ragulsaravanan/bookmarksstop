//making the popup visible once the popup-btn is clicked

var popupbtn1=document.getElementById("popup-btn")

var overlay1=document.querySelector(".overlay")

var popupcontentbox1=document.querySelector(".popup-contentbox")

popupbtn1.addEventListener("click",function(){
  overlay1.style.display="block"
  popupcontentbox1.style.display="block"
})

// cancel the popup-btn when click on the cancel btn


var cancel1=document.getElementById("cancel")

cancel1.addEventListener("click",function(event){
  event.preventDefault()
  overlay1.style.display="none"
  popupcontentbox1.style.display="none"
})


//selecting container ,addbtn,Book Title-input,Book Author-input,Short Description-box

var container1=document.querySelector(".container")
var addbtn1=document.getElementById("addbtn")
var BookTitleinput1=document.getElementById("Book Title-input")
var BookAuthorinput1=document.getElementById("Book Author-input")
var ShortDescriptionbox1=document.getElementById("Short Description-box")

addbtn1.addEventListener("click",function(event){
  var div=document.createElement("div")
  div.setAttribute("class","content")
  div.innerHTML=`<h2>${BookTitleinput1.value}</h2>
  <h5>${BookAuthorinput1.value}</h5>
  <p>${ShortDescriptionbox1.value}</p>
  <button onclick="delbtn(event)">Delete</button>`
  container1.append(div)
  event.preventDefault()
  overlay1.style.display="none"
  popupcontentbox1.style.display="none"
})

//delbtn function to delete when the content is to be deleted

function delbtn(event){
  event.target.parentElement.remove()
}