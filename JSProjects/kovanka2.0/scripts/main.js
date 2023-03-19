let btns = document.querySelectorAll('.header-navigation__item')


btns.forEach(element=>{
    element.addEventListener('mouseover',function(e){
        element.classList.add('active')
    })
    element.addEventListener('mouseout',function(e){
        element.classList.remove('active')
    })
})