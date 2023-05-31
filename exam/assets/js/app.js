const learnMoreCardContainer = document.querySelector(".learnMoreCardContainer");
fetch("http://localhost:3000/posts")
.then(res => res.json())
.then(data =>{
for (let i = 0; i < 3; i++) {
   const card =document.createElement("div");
   const IconDiv =document.createElement("div");
   const BtnDivv =document.createElement("div");

   const h2 =document.createElement("h2");
   const p =document.createElement("p");

   //inner
   IconDiv.innerHTML =`<i class="fa-solid fa-rocket"></i>`
   h2.innerHTML =data[i].author;
 p.innerHTML =data[i].title;
 BtnDivv.innerHTML =`<button type="button">Learn More</button>`;

 //add
 card.classList.add("card")

//append
learnMoreCardContainer.append(card);
card.append(IconDiv, h2, p, BtnDivv);


    
}
})


const btn = document.querySelector("#btn");
btn.addEventListener("click" ,function () {
   // alert("hi");
   fetch("http://localhost:3000/posts")
.then(res => res.json())
.then(data =>{
for (let i = 3; i < 9; i++) {
   const card =document.createElement("div");
   const IconDiv =document.createElement("div");
   const BtnDivv =document.createElement("div");

   const h2 =document.createElement("h2");
   const p =document.createElement("p");

   //inner
   IconDiv.innerHTML =`<i class="fa-solid fa-rocket"></i>`
   h2.innerHTML =data[i].author;
 p.innerHTML =data[i].title;
 BtnDivv.innerHTML =`<button type="button">Learn More</button>`;

 //add
 card.classList.add("card")

//append
learnMoreCardContainer.append(card);
card.append(IconDiv, h2, p, BtnDivv);


    
}
})
})