const tablet = 768;
const desktop = 1000;

let screenSize = ''

setScreenSize()

if (screenSize === 'mobile') {
    alertaMobile()
}

window.addEventListener('resize', () => setScreenSize())

function setScreenSize() {

    if (window.innerWidth < tablet) {
        screenSize = 'mobile'
    } else if (window.innerWidth >= tablet && window.innerWidth < desktop) {
        screenSize = 'tablet'
    } else if (window.innerWidth > desktop) {
        screenSize = 'desktop'
    }

    console.log(screenSize)

}

function alertaMobile() {
    alert('La experiencia de esta pagina es mas agradable en escritorio')
}