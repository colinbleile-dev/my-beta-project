function updateGreeting(name) {
  const messageElement = document.getElementById("responseMessage");
  messageElement.innerText = "Thanks for joining the beta list, " + name + "!";
}

const form = document.getElementById("contactForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const nameInput = document.getElementById("username").value;
  updateGreeting(nameInput);
});

const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "rgb(30, 41, 59)" ? "#f4f4f9" : "#1e293b";
  document.body.style.color = 
    document.body.style.color === "white" ? "#333" : "white";
});
