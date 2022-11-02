
document.addEventListener('DOMContentLoaded',function(){

    document.querySelector('form').onsubmit=function(){

        const name = document.querySelector('#name').value;
        alert(`Hello ${name}`)
    }

})


let number = document.querySelector('h1');
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


document.querySelectorAll('button').forEach(function(button){

    button.onclick= function(){

        document.querySelector('.headera_text').style.color = button.dataset.color;

    }

})


