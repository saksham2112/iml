function loadPage(project, event) {
    document.getElementById("viewer").src = "./" + project + "/index.html";

    // Remove active from all links
    document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));

    // Add active to clicked link
    event.target.classList.add("active");
}