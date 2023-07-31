function DarkMode() {

const darkModeToggle = document.getElementById("dark-mode-toggle")
const body = document.getElementById("dark-mode-off")

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
  })

}
export default DarkMode