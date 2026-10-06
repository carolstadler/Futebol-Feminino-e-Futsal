// MENU MOBILE

function abrirMenu() {

    const menu = document.getElementById("mobileMenu");

    menu.classList.toggle("active");

}


// FECHAR MENU AO CLICAR

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("mobileMenu")
            .classList.remove("active");

    });

});


// TOAST

function mostrarMensagem() {

    const toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


// NEWSLETTER

const form = document.getElementById("newsletterForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;

    if (email.trim() === "") {
        return;
    }

    mostrarMensagem();

    form.reset();

});


// ANIMAÇÃO AO ENTRAR NA TELA

const elementos = document.querySelectorAll(
    ".news-card, .main-news, .match, .featured, .cup-section"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


elementos.forEach(elemento => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(30px)";
    elemento.style.transition = "opacity .7s ease, transform .7s ease";

    observer.observe(elemento);

});


// EFEITO NO HEADER AO ROLAR

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});