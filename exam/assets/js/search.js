const myInput = document.getElementById("myInput");
const cards = document.querySelectorAll(".card");

myInput.addEventListener("keyup", function () {





    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().includes(input.value.toUpperCase())) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

});