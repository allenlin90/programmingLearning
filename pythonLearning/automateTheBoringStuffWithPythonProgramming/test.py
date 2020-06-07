import shutil, os, send2trash
# text = open('test.txt', 'w')
# text.write('Hello World!\nHIIIIIIIIIIIIIII\nNOOOOOOOOOOO')
# shutil.copy('test.txt', './test_rename.txt')
# os.makedirs('testFolder')
# shutil.move('test_rename.txt', './testFolder')
# shutil.rmtree('testFolder')

# for filename in os.listdir(): 
#     if filename.endswith('.txt'): 
#         os.unlink(filename)

send2trash.send2trash('test.txt') #send the file to recycling bin 