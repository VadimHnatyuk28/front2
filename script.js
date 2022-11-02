
document.addEventListener('DOMContentLoaded',function(){

    document.querySelector('form').onsubmit=function(){

        const name = document.querySelector('#name').value;
        alert(`Hello ${name}`)
    }

    



})

let number = document.querySelector('.disp');
let count = 0;

        function improve(){

            count++;
            number.innerHTML=count;

        }

        function remove(){

            count--;
            number.innerHTML=count;

        }

        function reset(){

            count = 0;
            number.innerHTML=0;

        }



document.querySelectorAll('.changeHeadText').forEach(function(button){

    button.onclick= function(){

        document.querySelector('.headera_text').style.color = button.dataset.color;

    }

})

document.querySelector('select').onchange = function(){
    document.querySelector('.headera_text').style.color =this.value; 
}

document.querySelector('.changeColorForm').onsubmit=function(){

    const name = document.querySelector('#color').value;
    document.querySelector('.headera_text').style.color = name;
}



