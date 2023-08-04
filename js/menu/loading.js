function loadingScreen() {
    const loadingScreen = document.querySelector(".loadingScreen")
    loadingScreen.classList.add("zIndex")
    loadingScreen.classList.add("opacity")
    setTimeout(() => {
        loadingScreen.classList.remove("opacity")
        setTimeout(() => {
            loadingScreen.classList.remove("zIndex")
        }, 500)
    }, 4000)
}