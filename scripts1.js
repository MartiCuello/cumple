const noButton = document.getElementById("noButton");

function avoidNo() {
    noButton.style.position = "absolute";
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

function accept() {
    window.location.href = "page3.html";
}