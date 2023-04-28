var lightModeToggle = document.getElementById("mode");

lightModeToggle.addEventListener("click", (e) => {
    toggle = e.target
    document.body.classList.toggle("lightMode");
    if (document.body.classList.contains("lightMode")) {
        toggle.src = "off.png";
    } else {
        toggle.src = "on.png";
    }
});
