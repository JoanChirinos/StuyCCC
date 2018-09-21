var lessons = [

    ['Lesson 1: What is this club?', 'lesson1.html']

];
var utils = [[]];

var showing_lessons = false;

function pop_lessons() {
    var l = ""
    if (!showing_lessons) {
        l = "<div class=\"row\">\n<div class=\"col\"><ul>\n";
        for (var i = 0; i < lessons.length; i++) {
            l += "<li><a target=\"_blank\"href=\"Lessons/" + lessons[i][1] + "\">" + lessons[i][0] + "</a></li>\n";
        }
        l += "</ul></div></div>\n";
        showing_lessons = true;
    } else showing_lessons = false;
    document.getElementById("lessons").innerHTML = l;
}

function pop_utils() {
    var l = "";
    if (!showing_utils) {
        l = "<div class=\"row\">\n<div class=\"col\"><ul>\n";
        for (var i = 0; i < utils.length; i++) {
            l += "<li><a target=\"_blank\"href=\"Utils/" + utils[i][1] + "\">" + utils[i][0] + "</a></li>\n";
        }
        l += "</ul></div></div>\n";
        showing_utils = true;
    } else showing_utils = false;
    document.getElementById("lessons").innerHTML = l;
}
