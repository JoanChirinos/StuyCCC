#! /usr/bin/python3

import cgi, cgitb
cgitb.enable()

print('Content-type: text/html\n\n') 

def go():
    fs = cgi.FieldStorage()
    
    #get values
    shirt = fs.getvalue('shirt', '')
    
    #get old values
    straw = open('shirts.txt', 'r')
    text = straw.read()
    straw.close()
    
    #format text
    vals = [int(text.split('\n')[0]), int(text.split('\n')[1])]
    
    if shirt != '':
        if shirt == '1':
            vals[0]++
        elif shirt == '2':
            vals[1]++
    
    #write new vals
    straw = open('shirts.txt', 'w')
    straw.write('\n'.join(str(i) for i in vals))
    straw.close()
    
    #redirect
    print("""<html><head></head><body><script>window.onload = function() {
    window.location.href = "http://homer.stuy.edu/~jchirinos/StuyCCC/";
    }</script></body></html>""")
    
go()