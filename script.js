const toggle = document.getElementById("toggle")
const body = document.getElementById("body")

toggle.addEventListener('click', () => {
    body.classList.toggle('light')
})