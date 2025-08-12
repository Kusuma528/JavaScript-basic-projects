const buttons=document.getElementsByClassName('button')
const body=document.querySelector('body')
Array.from(buttons).forEach(function(buttons){
    buttons.addEventListener('click',function(e){
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }
         if (e.target.id==='pink'){
            body.style.backgroundColor=e.target.id;
        }
         if (e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
        } if (e.target.id==='aqua'){
            body.style.backgroundColor=e.target.id;
        }if (e.target.id==='green'){
            body.style.backgroundColor=e.target.id;
        }if (e.target.id==='purple'){
            body.style.backgroundColor=e.target.id;
        }


    });
    
});
