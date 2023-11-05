const openNav = document.querySelector("#open");
const closeNav = document.querySelector("#close");
const body = document.querySelector("body");
const anchors = document.querySelectorAll("a");
const radioCloseNav = document.querySelector("#option-2");
const header = document.querySelector("#primary-header");
const scrollWatcher = document.createElement("div");
const scrollButton = document.querySelector("#btn--scroll");

openNav.addEventListener("click", () => {
  body.classList.add("overflow-hidden");
});

closeNav.addEventListener("click", () => {
  body.classList.remove("overflow-hidden");
});

anchors.forEach((a) => {
  a.addEventListener("click", () => {
    radioCloseNav.checked = true;
    body.classList.remove("overflow-hidden");
  });
});

scrollWatcher.setAttribute("data-scroll-watcher", "");

header.before(scrollWatcher);

const scrollButtonObserver = new IntersectionObserver(
  (entries) => {
    // Toggle scrollButton visibility

    scrollButton.classList.toggle("!visible", !entries[0].isIntersecting);
    scrollButton.classList.toggle(
      "sm-max:!opacity-90",
      !entries[0].isIntersecting
    );
    scrollButton.classList.toggle("!opacity-100", !entries[0].isIntersecting);

    scrollButton.addEventListener("click", () => {
      scrollTop();
    });

    function scrollTop() {
      document.body.scrollTop = 0; // Safari
      document.documentElement.scrollTop = 0; // Firefox, Chrome, Opera
    }
  },
  { rootMargin: "2000px 0px 0px 0px" }
);

scrollButtonObserver.observe(scrollWatcher);
