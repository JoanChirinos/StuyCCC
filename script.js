var lessons = [

    ['Lesson 1: What is this club?', '/Lessons/lesson1.html']

];
var utils = [
    ['CodingBat Python Practice', 'https://codingbat.com/python']
];
var links = [
    ['Rosalind', 'http://rosalind.info/'],
    ['SJC Problem Sets', 'https://www.sjcny.edu/long-island/academics/programs-departments/mathematics-and-computer-science/programming-competition']
];

var showing_lessons = false;
var showing_utils = false;
var showing_links = false;

function pop_lessons() {
    console.log('\n\n=====  populating lessons =====\n');
    var l = ""
    if (!showing_lessons) {
        l = "<div class=\"row\">\n<div class=\"col\"><ul>\n";
        for (var i = 0; i < lessons.length; i++) {
            l += "<li><a target=\"_blank\" href=\"" + lessons[i][1] + "\">" + lessons[i][0] + "</a></li>\n";
            console.log("<li><a target=\"_blank\" href=\"" + lessons[i][1] + "\">" + lessons[i][0] + "</a></li>\n");
        }
        l += "</ul></div></div>\n";
        showing_lessons = true;
    } else showing_lessons = false;
    document.getElementById("lessons").innerHTML = l;
    console.log('===== done populating lessons =====');
}

function pop_utils() {
    console.log('\n\n=====  populating utils =====\n');
    var l = ""
    if (!showing_utils) {
        l = "<div class=\"row\">\n<div class=\"col\"><ul>\n";
        for (var i = 0; i < utils.length; i++) {
            l += "<li><a target=\"_blank\" href=\"" + utils[i][1] + "\">" + utils[i][0] + "</a></li>\n";
            console.log("<li><a target=\"_blank\" href=\"" + utils[i][1] + "\">" + utils[i][0] + "</a></li>\n");
        }
        l += "</ul></div></div>\n";
        showing_utils = true;
    } else showing_utils = false;
    document.getElementById("utils").innerHTML = l;
    console.log('===== done populating utils =====');
}

function pop_links() {
    console.log('\n\n=====  populating links =====\n');
    var l = ""
    if (!showing_links) {
        l = "<div class=\"row\">\n<div class=\"col\"><ul>\n";
        for (var i = 0; i < links.length; i++) {
            l += "<li><a target=\"_blank\" href=\"" + links[i][1] + "\">" + links[i][0] + "</a></li>\n";
            console.log("<li><a target=\"_blank\" href=\"" + links[i][1] + "\">" + links[i][0] + "</a></li>\n");
        }
        l += "</ul></div></div>\n";
        showing_links = true;
    } else showing_links = false;
    document.getElementById("links").innerHTML = l;
    console.log('===== done populating links =====');
}
