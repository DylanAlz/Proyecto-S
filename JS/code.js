var header = document.getElementById('Header')

window.addEventListener('scroll', () =>{
    var scroll = window.scrollY
    if(scroll>10){
        header.style.backgroundColor = '#121212'
        header.style.opacity = '.8'
    }else{
        header.style.backgroundColor = 'trans'
    }
})