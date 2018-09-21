########## The lesson maker syntax ##########
#
# First line should be lesson title
# Text without preceding formatter will be treated as plaintext in a <p> tag
# A blank line will be treated as a <br> tag
#
# Open an ordered list with "!!olist!!"
# Close an ordered list with "!!endolist!!"
#
# Open an unordered list with "!!ulist!!"
# Close an unordered list with "!!endulist!!"
#
# Add an image with "image(<url>)" --> absolute dir, not relative
#
# Add a link with "a[<link text>](<link url>)"
#
# Add your own custom html between "!!html!!" and "!!endhtml!!"
#
# others shall be added l8r
#
#############################################

import re

def go():
    #take filename input and read it
    f = input("Input filename: ")
    straw = open(f, 'r')
    pretext = straw.read()
    straw.close()
    
    #start html file
    html = ""
    
    #fill in html
    pretext = pretext.split('\n')
    
    html += '<h1>' + pretext[0] + '</h1>\n' #adds title
    
    in_list = False #will be true if in olist --> precedes every element with <li>
    in_html = False #will be true if user is adding custom html --> will ignore all steps and paste users html in file
    
    for i in pretext[1:]:
        if in_html:
            if i != '!!endhtml!!':
                html += i + '\n'
            else:
                in_html = False
            continue
        if in_list:
            if i != '!!endulist!!' and i != '!!endolist!!':
                html += '<li>\n'
            else:
                if i == '!!endulist!!':
                    html += '</ul>\n\n'
                else:
                    html += '</ol>\n\n'
                in_list = False
                continue
        if i == '':
            html += '<br>\n'
            continue
        
        #check for list
        x = re.match(r'!![a-zA-Z]*!!', i)
        if x != None:
            found = x.group()
            
            #ordered lists
            if found.strip('!') == 'olist':
                html += '\n<ol>\n'
                in_list = True
            
            #unordered lists
            elif found.strip('!') == 'ulist':
                html += '\n<ul>\n'
                in_list = True
            
            #custom html
            elif found.strip('!') == 'html':
                in_html = True
            
            #anything else
            else:
                html += '<p>' + found + '</p>\n'
            continue
            
        #check for img url
        x = re.match(r'image\(https?://.*\)', i)
        if x != None:
            html += '<img src="' + x.group()[6:-1] + '">\n'
            continue
            
        #check for hyperlink
        x = re.match(r'a\[.*\]\(https*://.*\)', i)
        if x != None:
            full = x.group()
            inner_text = re.search(r'\[.*\]', full).group()[1:-1]
            url = re.search(r'\(https*://.*\)', full).group()[1:-1]
            html += '<a href="' + url + '">' + inner_text + '</a>\n'
            continue
        
        #if nothing else worked
        html += '<p>' + i + '</p>\n'
        
        if in_list:
            html += '</li>\n'
    
    name = input('Output filename: ')
    
    straw = open(name, 'w')
    straw.write(html)
    straw.close()
    
    print('Done writing')