
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


document.querySelector('#green').onclick = function(){

    document.querySelector('#green').style.backgroundColor = 'green';

}

document.querySelector('#red').onclick = function(){

    document.querySelector('#red').style.backgroundColor = 'red';

}

document.querySelector('#blue').onclick = function(){

    document.querySelector('#blue').style.backgroundColor = 'blue';

}


