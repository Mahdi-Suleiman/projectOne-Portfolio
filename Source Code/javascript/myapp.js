const toggleButton = document.getElementsByClassName('toggle-menu')[0]
const navbarLinks = document.getElementsByClassName('normal-navbar')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})