


/*************************GIF****************************/ 

const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search')
const resultsEl = document.getElementById('searchList')

searchForm.addEventListener('submit', function(e) {
  e.preventDefault()
  const q = searchInput.value
  search(q)
})

function search(q) {
    const APIKEY = 'XPopyBNaDradpd7pMdSPbu2jJBntPNKW'
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&Q=${q}`;
        

    fetch(path).then(function (res) {
        return res.json()
    }).then(function (json) {
        console.log(json.data[0].images.fixed_width.url)

        let resultsHTML = ''

        json.data.forEach(function (obj) {
            console.log(obj)

            const url = obj.images.fixed_width.url
            const width = obj.images.fixed_width.width
            const height = obj.images.fixed_width.height
            const title = obj.title
            const username = obj.username

            resultsHTML += `
        
            <img class="item" src="${url}" width="${width}" height="${height}" alt="${title}">
            
            <div class="hovertitulo">
                <div class="heart2" onmouseover="setNewImage()" onmouseout="setOldImage()" >
                    <img id="heart" src="/assets/scripts/icon-fav.svg" alt="">
                </div>
                <div class="save2" onmouseover="setNewI mage1()" onmouseout="setOldImage1()">
                    <img  id="download1"  src="/assets/scripts/icon-download.svg" alt=""> 
                </div>
                <div class="expandir2" onmouseover="setNewImage2()" onmouseout="setOldImage2()">
                    <img id="exp1" src="/assets/scripts/icon-max-normal.svg" alt="">
                </div>
                <p class="usar2">
                    ${username}
                </p>
                <p class="titulogifo2" id="titulogifo2">
                    ${title}
                </p>
            </div>
          
        `;



        
        });
        

        resultsEl.innerHTML = resultsHTML
    }).catch(function (err) {
        console.log(err.message)

    


    })
}


/***********************autocomplete*******************/ 


function getAuto(endPoint, callback){
    fetch('https://api.giphy.com/v1/gifs'+ endPoint + '?api_key=' + APIKEY + '&q=' + searchbox.value + '&limit=4')
    .then( dataType  => dataType.json())
    .then( apiResponse => callback(apiResponse))
    };
        
    const getAutocomplete  = () => {
        getAuto(ENDPOINT.autocomplete, (apiReturn) => {
            const {data} = apiReturn;
            console.log(data);
            console.log(data[2])  

        
            const searchInput = document.querySelector('.searchbox');
            const suggestionsPanel = document.querySelector('.suggestions');

            searchInput.addEventListener('keyup', function (){
            const input = searchInput.value;
            console.log(input)
            
            suggestionsPanel.innerHTML = '';


        data.forEach(function(suggested){
            const div = document.createElement('div');
            
            div.innerHTML = suggested.name;
            div.classList.add('complete');
            suggestionsPanel.appendChild(div);
            /*********************Adding Onclick******************/
            div.addEventListener('click', change => {
                const palabra = div.textContent
                search(palabra)

                while (suggestionsPanel.firstChild) {
                    suggestionsPanel.removeChild(suggestionsPanel.firstChild);
                }
                
                searchInput.value = suggested.name
                dosearch()
            }) 
        
    }) 
    if (input === ''){
        suggestionsPanel.innerHTML = '';   
    }


})
             
})
}



searchbox.addEventListener('input', getAutocomplete)