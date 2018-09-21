#! /usr/bin/python3

import cgi, cgitb
cgitb.enable()


def go():
    print('Content-type: text/html\n\n')
    fs = cgi.FieldStorage()
    
    fname = fs.getvalue('firstName', 'Joan')
    lname = fs.getvalue('lastName', 'Chirinos')
    email = fs.getvalue('email', 'jchirinos@stuy.edu')
    
    f = open('people.txt', 'a')
    f.write(','.join([fname, lname, email]) + '\n')
    f.close()
    print("""<html><head></head><body><script>window.onload = function() {
    // similar behavior as clicking on a link
    window.location.href = "http://homer.stuy.edu/~jchirinos/StuyCCC/Interest/index.html";
}</script></body></html>""")

go()
