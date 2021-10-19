function toggleDark() {
    const navbar = document.querySelector("nav");
    const footer = document.querySelector("footer");
    const section = document.querySelectorAll("section");
    const header = document.querySelectorAll("header");
    const article = document.querySelectorAll("article");
    const input = document.querySelectorAll("input");
    const textarea = document.querySelectorAll("textarea");
    const bgImg = document.querySelectorAll(".bg-img");

    navbar.classList.toggle("darkMode");
    footer.classList.toggle("darkMode");
    // section.classList.toggle("darkMode");
    for (let i = 0; i < section.length; i++) {
        const element = section[i];
        element.classList.toggle("darkMode");
    }
    for (let i = 0; i < header.length; i++) {
        const element = header[i];
        element.classList.toggle("darkMode");
    }
    for (let i = 0; i < article.length; i++) {
        const element = article[i];
        element.classList.toggle("darkMode");
    }
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        element.classList.toggle("darkMode");
    }
    for (let i = 0; i < textarea.length; i++) {
        const element = textarea[i];
        element.classList.toggle("darkMode");
    }
    for (let i = 0; i < bgImg.length; i++) {
        const element = bgImg[i];
        element.classList.toggle("no-bg");
    }
    // element.classList.toggle("darkMode");


}