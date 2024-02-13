function makeblue(){
    document.body.style.backgroundColor ='#d0e1f9';
}

const y = document.getElementById('make-yellow');
    //console.log(y);
    y.onclick = makeyellow;

 function makeyellow(){
    document.body.style.backgroundColor = '#ffcc5c'
 }   

 const v = document.getElementById('make-pink');
 v.onclick = function makepink(){
 document.body.style.backgroundColor = '#ff77aa'
} 

document.getElementById('make-green').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green'
})

document.getElementById('event').addEventListener('click',function(){
    document.getElementById('texty').innerText = document.getElementById('info').value;
    document.getElementById('info').value='';
})

