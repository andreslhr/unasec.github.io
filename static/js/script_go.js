window.onscroll = function (){
    if(document.documentElement.scrollTop > 200){
        document.querySelector('.container-go')
        .classList.add('show');
    }else{
        document.querySelector('.container-go')
        .classList.remove('show');
    }
    }
    
    document.querySelector('.container-go')
    .addEventListener('click',() =>{
    window.scrollTo({
    top: 0,
    behavior:'smooth'
    });
    });
    