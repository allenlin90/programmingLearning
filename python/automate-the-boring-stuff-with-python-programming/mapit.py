import webbrowser, sys, pyperclip 
sys.argv # ['program.py', 'soi', '26', 'Sukhumvit', 'Bangkok']
# check if command line arguments were passed 
if len(sys.argv) > 1: 
    # ignore the first item in the list, which is the program name and get the address 
    address = ' '.join(sys.argv[1:])
else: 
    # get data input from computer clipboard 
    address = pyperclip.paste()
# https://www.google.com/maps/place/<ADDRESS>
webbrowser.open('https://www.google.com/maps/place/' + address) 