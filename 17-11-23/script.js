//Esercizio 1 e 3
const popupEl = () => {
  const wrapperEl = document.createElement("div");
  const textEl = document.createElement("p");
  const btnEl = document.createElement("button");
  const btnEl2 = document.createElement("button2");

  wrapperEl.className = "pop-up";
  textEl.textContent = "Sei maggiorenne?";
  btnEl.className = "popup-button";
  btnEl2.className = "popup-button2";
  btnEl.textContent = "Yes";
  btnEl2.textContent = "No";

  wrapperEl.append(textEl, btnEl, btnEl2);
  return wrapperEl;
};

setTimeout(() => {
  const overlay =
    document.querySelector(
      ".overlay"
    );
  const popup = popupEl();
  document.body.append(popup);
  const buttonYes = document.querySelector(".popup-button");
  const buttonNo = document.querySelector(".popup-button2");
  buttonYes.addEventListener("click", () => {
    popup.remove();
    overlay.style.display = "none"; 
  });
  buttonNo.addEventListener("click", () => {
    window.open("https://www.google.it", "_blank");
  });
}, 3000);
