const serversNavigation = document.querySelector(".servers__navigation");

/*
 * Woo, I love event delegation! 🙂
 */

serversNavigation.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() !== "button") return;

  // Grab current active server and set aria-expanded to false

  const newServer = event.target;
  const currentServer = document.querySelector(
    ".servers__navigation button[aria-expanded=true]"
  );

  currentServer && currentServer.setAttribute("aria-expanded", false);
  newServer.setAttribute("aria-expanded", true);
});
