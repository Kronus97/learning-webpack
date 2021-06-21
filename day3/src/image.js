import Sunset from './static/images/sunset.jpg'

function addBackgroundImage() {
    document.querySelector('body').style.background = `url(${Sunset}) center no-repeat`
}

export default addBackgroundImage
