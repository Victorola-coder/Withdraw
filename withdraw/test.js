let enoch = 0;
let txt="I will be greater than you think";
let speed = 50;


function typingEffect() {
    if (enoch < txt.length) {
        document.getElementById("test").innerHTMl +=txt.charAt(enoch);
        enoch++;
        setTimeout(typingEffect, speed);
    }
    

var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() 
    if (i < txt.length) {
    document.querySelector("#demo").inner += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
}
