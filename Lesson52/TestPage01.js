let langArray = navigator.languages;
let buffer = "";
for (let i = 0; i < langArray.length; i++){
    buffer = buffer + " " + langArray.at(i);
}
document.getElementById('p01').innerText = buffer;