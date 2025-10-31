document.addEventListener("DOMContentLoaded", () => {
    // Set dynamic year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Tilt effect (desktop only)
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const card = document.querySelector(".card");
        const maxTilt = 12; // degrees

        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateY = ((x - centerX) / centerX) * maxTilt;
            const rotateX = ((centerY - y) / centerY) * maxTilt; // inverted Y

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
        });
    }
});
