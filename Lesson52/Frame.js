let next = document.getElementById('next');
let back = document.getElementById('back');

next.addEventListener('click', function (){
   history.forward();
});

back.addEventListener('click', function (){
   frames[0].history.back();
});

