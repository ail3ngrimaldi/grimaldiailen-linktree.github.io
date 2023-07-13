let menu = document.querySelector('.hamburger-menu');
let menu_items = document.querySelector('.menu');


menu.addEventListener('click', () => {
  if (menu.getAttribute("aria-expanded") === "true") {
      menu_items.classList.remove('opened');
      menu.setAttribute("aria-expanded", "false");
  } else {
      menu_items.classList.add('opened');
      menu.setAttribute("aria-expanded", "true");
  }
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
  });
});

