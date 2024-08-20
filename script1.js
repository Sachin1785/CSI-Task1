document.addEventListener('DOMContentLoaded', (event) => {
    var i = 0;
    var txt = 'NEXCENT'; 
    var speed = 200; 
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typethis").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
});