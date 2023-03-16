let open = document.getElementById('open');
let close = document.getElementById('close');
let lang = document.getElementById('lang');
let historyLength = document.getElementById('historyLength');
let histLeng = document.getElementById('histLeng');
let winTest;

function winOpn(){
    winTest = window.open("https://microsoft.com", "_blank", "popup=yes");
}

function winLangOpn(){
    winTest = window.open("TestPage01.html", "_blank", "popup=yes");
}

function winCls(){
    winTest.close();
}

open.addEventListener('click', function (){
    winOpn();
});

close.addEventListener('click', function (){
    winCls();
});

lang.addEventListener('click', function (){
    winLangOpn();
});

historyLength.addEventListener('click', function (){
    histLeng.innerText = window.history.length;
})
