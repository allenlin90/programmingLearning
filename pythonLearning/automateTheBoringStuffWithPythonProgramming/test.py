import shutil, os, send2trash, traceback, logging, webbrowser
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
# text = open('test.txt', 'w')
# text.write('Hello World!\nHIIIIIIIIIIIIIII\nNOOOOOOOOOOO')
# shutil.copy('test.txt', './test_rename.txt')
# os.makedirs('testFolder')
# shutil.move('test_rename.txt', './testFolder')
# shutil.rmtree('testFolder')

# for filename in os.listdir(): 
#     if filename.endswith('.txt'): 
#         os.unlink(filename)

# send2trash.send2trash('test.txt') #send the file to recycling bin 

# for folderName, subfolders, filenames in os.walk('/mnt/c/Users/ht016/Desktop/programmingLearning/pythonLearning'): 
#     print('The folder is ' + folderName)
#     print('The subfolders in ' + folderName + ' are: ' + str(subfolders))
#     print('The filenames in ' + folderName + ' are: ' + str(filenames))

# def boxPrint(symbol, width, height):
#         if len(symbol) != 1: 
#             raise Exception('"symbol" should be a string of length 1')
#         if (width < 2) or (height < 2):
#             raise Exception('"width" and "height" must be greater than or equal to 2')
#         print(symbol * width)
#         for i in range(height - 2): 
#             print(symbol + (' ' * (width - 2)) + symbol )
#         print(symbol * width)

# boxPrint('+', 2 ,2)

#raise Exception()
# try: 
#     raise Exception('Error Message')
# except: 
#     errorFile = open('error_log.txt', 'a')
#     errorFile.write(traceback.format_exc())
#     errorFile.close() 
#     print('The traceback info was written to error_log.txt')
# os.unlink('error_log.txt')

# market_2nd = {'ns': 'green', 'ew': 'red'}

# def switchLights(intersection): 
#     for key in intersection.keys(): 
#         if intersection[key] == 'green': 
#             intersection[key] = 'yello'
#         elif intersection[key] == 'yellow': 
#             intersection[key] = 'red'
#         elif intersection[key] == 'red': 
#             intersection[key] = 'green'
#     assert 'red' in intersection.values(), 'Neither of the light is red ' + str(market_2nd)

# switchLights(market_2nd)

# logging.debug('Start of the program')
# def factorial(n): 
#     logging.debug('Start of factorial(%s)' % (n))
#     total = 1
#     for i in range(1, n+1):
#         total *= i 
#         logging.debug('i is %s, total is %s' % (i, total))
#     logging.debug('Return value is %s' % (total))
#     return total #it returns 0 as i starts from 0 

# print(factorial(4))
# logging.debug('End of the program')

#Using Python IDLE debugger 
# print('Enter the first number to add:')
# first = input()
# print('Enter the second number to add:')
# second = input()
# print('Enter the third number to add:')
# third = input()
# print('The sum is ' + first + second + third)

#use Step and Out in debugger
# def blahBlahBlah():
#     print('blah')
#     print('blah')
#     print('blah')
#     moreBlah()
#     print('blah')
#     print('blah')
#     print('blah')
#     moreBlah()
#     print('blah')
#     print('blah')
#     print('blah')
#     print('blah')

# def moreBlah():
#     print('more blahs')
#     print('more blahs')
#     print('more blahs')

# blahBlahBlah()

#webbrowser.open('https://automatetheboringstuff.com') 
print(webbrowser._tryorder)