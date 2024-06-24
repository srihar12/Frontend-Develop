const menuBtn=document.getElementById("menu-btn");
const navLinks=document.getElementById("nav__links");
const menuBtnIcon=menuBtn.getElementById("i");
menuBtn.addEventListener("click",(e)=> {
    navLinks.classList.toggle("open");

    const isOpen=navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen ? "ri-close-line":"ri-menu-line" );
});
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
  const scrollRevealOption={
    distance:"50px",
    origin:"bottom",
   duration:1000,

  };
  scrollReveal().reveal(
    ".header-image img",{
        ...scrollRevealOption,
        origin:"right",
    });
  scrollReveal().reveal(
    ".header-content h1",{
        ...scrollRevealOption,
        delay:1000,
    }
  );
  scrollReveal().reveal(
    ".header-content h2",{
        ...scrollRevealOption,
        delay:500,
    }
  ); 