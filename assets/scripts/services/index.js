/*************************Menu responsive****************************/ 
function toggleClass(){
    let menu = document.querySelector(".mainMenu");
    menu.classList.toggle("toggleCls")

}

/*************************burger menu****************************/ 

var bur = document.getElementById('burger');

bur.addEventListener('click', function(bur){
    bur.target.classList.toggle('burger-on');
})

/*************************change nocturno/diurno****************************/ 
function changeText(idElement) {
    var element = document.getElementById('element' + idElement);
    if (idElement === 1 || idElement === 2) {
        if (element.innerHTML === 'Modo Diurno') element.innerHTML = 'Modo Nocturno';
        else {
            element.innerHTML = 'Modo Diurno';
        }
    }
}


/*************************dark mode****************************/ 
const dark = document.querySelector('.dark')
 dark.addEventListener('click', function(){
    var element = document.body;
    element.classList.toggle("darkmode");
    var colordetexto = document.querySelectorAll('.colordetexto')
    var lighttrending = document.querySelector('.lighttrending')
    var lightbars = document.querySelector('.lightbars')
    

    lighttrending.classList.toggle("darktrending")
    lightbars.classList.toggle("darkbars")
    
    
   
    
    for(let i = 0; i < colordetexto.length; i++){
        
        colordetexto[i].classList.toggle("textonoche")   
       
    }

})
