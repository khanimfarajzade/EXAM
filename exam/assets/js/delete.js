const learnMoreCardContainerDelete = document.querySelector(
  ".learnMoreCardContainerDelete"
);
fetch("http://localhost:3000/posts")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const card = document.createElement("div");
      const IconDiv = document.createElement("div");
      const BtnDivv = document.createElement("div");

      const h2 = document.createElement("h2");
      const p = document.createElement("p");

      //inner
      IconDiv.innerHTML = `<i class="fa-solid fa-rocket"></i>`;
      h2.innerHTML = data[i].author;
      p.innerHTML = data[i].title;
      BtnDivv.innerHTML = `Delete`;
      BtnDivv.addEventListener("click", function () {
        fetch("http://localhost:3000/posts/" + data[i].id, {
          method: "DELETE",
        })
          .then((res) => res.text()) // or res.json()
          .then((res) => console.log(res));
      });

      //add
      card.classList.add("card");

      //append
      learnMoreCardContainerDelete.append(card);
      card.append(IconDiv, h2, p, BtnDivv);
    }
  });

//const BtnDivv = document.querySelector(".BtnDivv");
