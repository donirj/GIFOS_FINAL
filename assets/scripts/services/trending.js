/*************************Key****************************/ 
const searchbox = document.querySelector('#search')

const APIKEY = "XPopyBNaDradpd7pMdSPbu2jJBntPNKW"
const ENDPOINT = {
    trending: '/trending', 
    search: '/search',    
    autocomplete: '/search/tags',
}


/*************************Trending****************************/ 
const trendingContainer = document.querySelector('#trending');

function get(endPoint, callback) {
    fetch('https://api.giphy.com/v1/gifs' + endPoint + '?api_key=' + APIKEY + '&limit=3')
        .then(dataType => dataType.json())
        .then(apiResponse => callback(apiResponse))
};

const getTrending = () => {
    get(ENDPOINT.trending, (apiReturn) => {
        const { data } = apiReturn;
        console.log('linea 27', data)
        console.log(data[5])

        data.forEach(gifItem => {
            const {
                title,
                username,
                images,
            } = gifItem

            const imagesUrl = images.original.url

            const template = `
        
        
                <img class="GIFSS" id="GIFSS" style="width: 100%; height: 100%; object-fit: cover;"  src=" ${imagesUrl}">
                <div class="cuadromorado">
            
                    <div class="heart"  onmouseover="setNewImage()" onmouseout="setOldImage()" >
                        <img id="heart"  src="/assets/scripts/icon-fav.svg" alt="">
                    </div>
                    <div class="save" onmouseover="setNewImage1()" onmouseout="setOldImage1()">
                        <img  id="download1"  src="/assets/scripts/icon-download.svg" alt="">
                    </div>
                    <div class="expandir" onmouseover="setNewImage2()" onmouseout="setOldImage2()">
                        <img id="exp1" src="/assets/scripts/icon-max-normal.svg" alt="">
                    </div>
                    <p class="usar">
                        ${username}
                    </p>
                    <p class="titulogifo" id="titulogifo">
                        ${title}
                    </p>
                
                </div>
                `
                ;

            const gifContainer = document.createElement('div');
            gifContainer.classList.add("gifContainer");
            gifContainer.innerHTML = template;
            trendingContainer.appendChild(gifContainer)

            const savebtn = document.createElement('div');
            savebtn.classList.add("savebtn");
            savebtn.innerHTML = template;

            

        });

        const hovergif = document.querySelectorAll('.GIFSS')
        const cuadromorado = document.querySelectorAll(".cuadromorado")

        for (let i = 0; i < 3; i++) {

            hovergif[i].addEventListener("mouseover", () => {
                cuadromorado[i].style.display = "flex";
                let heartbtn = document.querySelector('#heart')
               // console.log("boton", heartbtn)
                heartbtn.addEventListener("click", () => {
                    console.log("heart")

                })
            })
            cuadromorado[i].addEventListener("mouseout", () => {
                cuadromorado[i].style.display = "none";
            })
        }


        //////hovers para botones (no los he hecho)////


    });
}

getTrending();

/*************************Botones****************************/ 

       
