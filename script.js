const links = document.querySelectorAll("nav li");


icons.addEventListener("click", () => {
    nav.classList.toggle("active");
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

const darkmode = document.querySelector(".darkmodebtn");


darkmode.addEventListener("click", function () {
    document.body.classList.toggle("darkmode");
    document.querySelectorAll("input, select, .centerCircle, .darkmodebtn").forEach (element => {
        element.classList.toggle("darkmode");
    }) 
});


const message =
  "Merci d'avoir réservé chez nous.";

function messageFR(){
    alert(message);
} 

  const message_EN =
  "Thanks for your reservation.";

  function messageEN(){
    alert(message_EN);
}