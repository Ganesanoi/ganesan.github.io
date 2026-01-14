const button = document.getElementById("goalButton");
const text = document.getElementById("goalText");

button.addEventListener("click", () => {
  if (text.classList.contains("hidden")) {
    text.classList.remove("hidden");
    button.textContent = "Hide";
  } else {
    text.classList.add("hidden");
    button.textContent = "Why I Started";
  }
});
