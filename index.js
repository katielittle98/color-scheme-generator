const seedColor = document.getElementById("seed-color")
const mode = document.getElementById("mode")
const submitBtn = document.getElementById("submit-btn")
const colorSelection = document.getElementById("color-selection")
const docTitle = document.querySelector('.doc-title')



function getColorScheme() {
    const hexValue = seedColor.value.replace("#", '')
    let modeValue = mode.value
    docTitle.style.color = seedColor.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${modeValue}&count=5`,
    {
        method: "GET",
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => {
        console.log(hexValue)
        colorSelection.innerHTML = ''
        for (let color of data.colors) {
            colorSelection.innerHTML += `
                <div id='hex-color' class="color">
                    <img class="color-img" src="${color.image.bare}">
                    <h3 class="color-title">${color.hex.value}</h3>
                </div>
                `
            console.log(color.hex.value)
        }

    })
    console.log(modeValue)
}

submitBtn.addEventListener("click", getColorScheme)


