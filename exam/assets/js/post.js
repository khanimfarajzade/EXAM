const titleBtn = document.querySelector("#titleBtn");
const authorBtn = document.querySelector("#authorBtn");
const myForm = document.querySelector(".myForm");

myForm.addEventListener("submit" ,function () {
   fetch("http://localhost:3000/posts" ,{
    method: "POST",
  body: JSON.stringify({
   
    title: titleBtn.value,
    author: authorBtn.value
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
   })
   .then(res =>res.json())
   .then(
    data =>{
        console.log(data);
    }
   )
})

