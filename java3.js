// Animate progress bars on page load
const bars = document.querySelectorAll(".progress-bar");

window.addEventListener("load", () => {
    bars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
        bar.textContent = width; // show initial number
    });
});

// Follow mouse hover effect and dynamic number
bars.forEach(bar => {
    bar.addEventListener("mousemove", e => {
        const rect = bar.getBoundingClientRect();
        let percent = ((e.clientX - rect.left) / rect.width) * 100;
        const maxWidth = parseInt(bar.getAttribute("data-width"));
        percent = Math.min(percent, maxWidth);
        bar.style.width = percent + "%";
        bar.textContent = Math.round(percent) + "%"; // update text dynamically
    });

    bar.addEventListener("mouseleave", () => {
        const maxWidth = bar.getAttribute("data-width");
        bar.style.width = maxWidth;
        bar.textContent = maxWidth;
    });
});

// Toggle skill info on card click
function toggleSkill(card) {
    const allCards = document.querySelectorAll(".skill-card");
    allCards.forEach(c => {
        if (c !== card) c.classList.remove("active");
    });
    card.classList.toggle("active");
}


function toggleSkill(card) {
    card.classList.toggle("active");
}


function toggleSkill(card) {
    card.classList.toggle("active");

    const bar = card.querySelector(".progress-bar");
    const width = bar.getAttribute("data-width");

    if (card.classList.contains("active")) {
        bar.style.width = width;
    } else {
        bar.style.width = "0";
    }
}