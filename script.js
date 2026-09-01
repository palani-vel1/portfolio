const words = [
    "Full Stack Web Developer",
    "PHP & MySQL Developer",
    "Data Analytics Enthusiast"
];

let i = 0,
    j = 0,
    del = false;

const typing = document.getElementById("typing");

function type() {
    const word = words[i];
    typing.textContent = word.substring(0, j);

    if (!del) {
        j++;
        if (j > word.length) {
            del = true;
            setTimeout(type, 1200);
            return;
        }
    } else {
        j--;
        if (j === 0) {
            del = false;
            i = (i + 1) % words.length;
        }
    }

    setTimeout(type, del ? 50 : 100);
}

type();

// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealSections() {
    reveals.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 120) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Neon Cursor Glow
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    }
});