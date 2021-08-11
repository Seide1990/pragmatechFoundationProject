

    let box=document.querySelector('#box');
    let up=document.querySelector('.up');
    let down=document.querySelector('.down');
    let left=document.querySelector('.left');
    let right=document.querySelector('.right');
    let start=document.querySelector('.START');

 value=250;
 value1=250;
 start.addEventListener ('click', function() {
     box.style.marginTop='250px';
     box.style.marginLeft='250px';
    box.style.background='green'})

    up.addEventListener ('click', function() {

    var txt = document.querySelector('#box');
    if (value1!=00){
        box.style.background='green';
         value1-=10;
        box.style.marginTop =value1 + 'px';
        }
    else {
        box.style.background='red';
       
    
    }

    })

    down.addEventListener ('click', function() {
         document.querySelector('#box');
        if(value1!=550){
            box.style.background='green';
        value1+=10;
        box.style.marginTop =value1 + 'px';
        }
        else {
                box.style.background='red';

        }
    
        })
        left.addEventListener ('click', function() {
            var txt = document.querySelector('#box');
            if (value!=0){
                box.style.background='green';
            value-=10;
            box.style.marginLeft =value+ 'px';}
            else {
                box.style.background='red';
            }
        
            })
            right.addEventListener ('click', function() {
                var txt = document.querySelector('#box');
                if (value!=550){
                    box.style.background='green';
                value+=10;
                box.style.marginLeft =value+ 'px';}
                else{
                    box.style.background='red';
                }
            
                })
 
