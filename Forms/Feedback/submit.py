#! /usr/bin/python3

import cgi, cgitb
cgitb.enable()

print('Content-type: text/html\n\n') 

def go():
    fs = cgi.FieldStorage()
    
    name = fs.getvalue('name', 'No name')
    #just in case
    if name == '':
        name = 'No name'
    feedback = fs.getvalue('feedback', 'No feedback')
    
    straw = open('feedback.txt', 'a')
    straw.write(name + '|' + feedback + '\n')
    straw.close()
    
    print("""<html>\n\t<body>\n\t\t<h1>\n\t\t\tThanks for the feedback! This page will close in 3 seconds\n\t\t</h1>\n\t\t<script>\n\t\tsetTimeout(function () {window.close(); //will redirect to your blog page (an ex: blog.html)}, 3000);\n\t\t</script>\n\t</body>\n</html>""")
    
go()
