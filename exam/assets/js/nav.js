const mobilMenu =document.querySelector(".mobilMenu");
const navBtn =document.querySelector(".navBtn");
const mobilList =document.querySelector(".mobilList");

navBtn.addEventListener("click" ,function () {
   // alert("hi");
   mobilList.classList.toggle("list");

})