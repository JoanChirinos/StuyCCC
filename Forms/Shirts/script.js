/*
function load_images() {
    document.getElementById('img1').innerHTML = '<img src="/~jchirinos/StuyCCC/data/imgs/Shirt1.png"><br>';
    document.getElementById('img2').innerHTML = '<img src="/~jchirinos/StuyCCC/data/imgs/Shirt2.png"><br>';
}
*/

/********** SUPER USEFUL ASYNCHROUS IMG LOADING SCRIPT **********/

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');

var dwn_img1 = new Image();
var dwn_img2 = new Image();

dwn_img1.onload = function () {
    img1.src = this.src;
};

dwn_img2.onload = function () {
    img2.src = this.src;
};

dwn_img1.src = "/StuyCCC/data/imgs/Shirt1.png"; //pls work
dwn_img2.src = "/StuyCCC/data/imgs/Shirt2.png"; // pls work

/********** END SUPER USEFUL ASYNCHROUS IMG LOADING SCRIPT **********pls/
