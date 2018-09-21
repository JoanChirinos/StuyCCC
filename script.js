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

var leadership = [
    ['Joan Chirinos', 'Senior', 'President', 'None'],
    ['Cathy Cai', 'Senior', 'Vice President', 'None'],
    ['Fiona Cai', 'Senior', 'Vice President', 'None'],
    ['Maryann Foley', 'Senior', 'Vice President', 'None'],
    ['Aaron Li', 'Senior', 'Teacher', 'None'],
    ['Alexander Liu', 'Senior', 'Teacher', 'None'],
    ['Bill Ni', 'Senior', 'Teacher', 'None'],
    ['Jason Tung', 'Senior', 'Teacher', 'None'],
    ['Johnny Wong', 'Senior', 'Teacher', 'None'],
    ['Meredith Hu', 'Senior', 'Teacher', 'None'],
    ['Ricky Lin', 'Senior', 'Teacher', 'None'],
    ['Simon Berens', 'Senior', 'Teacher', 'None']
];

var showing_lessons = false;
var showing_utils = false;
var showing_links = false;
var showing_leadership = false;

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

function pop_leadership() {
    console.log('\n\n=====  populating leadership =====\n');
    var l = ""
    if (!showing_leadership) {
        l = "<div class=\"row\">\n<div class=\"col-md\"><center>\n";
        for (var i = 0; i < leadership.length / 2; i++) {
            var p = leadership[i];
            l += "<h3>" + p[0] + '</h3>\n';
            if (p[3] != 'None') {
                l += "<img src=\"/data/imgs/" + p[3] + "\">\n"
            } else {
                l += "<img style=\"max-width: 25vw; max-height: 25vh;\"class=\"img-thumbnail\" src=\"data/imgs/blank-profile-picture-973460_1280.png\">\n"
            }
            l += "<p><i>" + p[1] + " | " + p[2] + "</i></p>\n"
        }
        l += "</center></div>\n<div class=\"col-md\"><center>";
        for (var i = leadership.length / 2; i < leadership.length / 2; i++) {
            var p = leadership[i];
            l += "<h3>" + p[0] + '</h3>\n';
            if (p[3] != 'None') {
                l += "<img src=\"/data/imgs/" + p[3] + "\">\n"
            } else {
                l += "<img style=\"max-width: 25vw; max-height: 25vh;\"class=\"img-thumbnail\" src=\"data/imgs/blank-profile-picture-973460_1280.png\">\n"
            }
            l += "<p><i>" + p[1] + " | " + p[2] + "</i></p>\n"
        }
        l += "</center></div></div>\n";
        showing_leadership = true;
    } else showing_leadership = false;
    document.getElementById("leadership").innerHTML = l;
    console.log('===== done populating leadership =====');
}
