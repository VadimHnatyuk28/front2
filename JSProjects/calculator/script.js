let inp = document.getElementById('inp')
let result = []
let element;
let data;
let show_result = document.querySelector('.result')
console.log(show_result)

inp.addEventListener('input',(e)=>{
    data = e.target.value
    result.push(data)
    console.log(result)
    
    

    
})