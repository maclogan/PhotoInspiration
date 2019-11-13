let getImages = (imageCount) => {

    for (let i=0; i<imageCount; i++) {
        fetch(`https://source.unsplash.com/random/${i}`).then((response) => {
            let image = document.createElement('div')
            image.classList.add('image')
            image.innerHTML = `<img src="${response.url}" alt="random image"/>`
            document.getElementById('photos').appendChild(image)
        })
    }

}

getImages(10)