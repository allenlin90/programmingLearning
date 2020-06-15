import shutil, os, send2trash, traceback, logging, webbrowser, requests, bs4, time, openpyxl, PyPDF2
from selenium import webdriver 
#logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
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

# webbrowser.open('https://automatetheboringstuff.com') 

# # download file from website 
# res = requests.get('https://automatetheboringstuff.com/files/rj.txt')
# print(res.status_code)
# print(len(res.text))
# playFile = open('RomeoAndJuliet.txt', 'wb')
# for chunk in res.iter_content(100000):
#     playFile.write(chunk) 
# playFile.close() 

# res = requests.get('https://automatetheboringstuff.com/')
# res.raise_for_status()
# soup = bs4.BeautifulSoup(res.text, 'html.parser')
# links = soup.select('a') 

# for e in elements: 
#     print(e.text)

# def getAmazonPrice(productURL): 
#     res = requests.get(productURL)
#     res.raise_for_status()

#     soup = BeautifulSoup(res.text, 'html.parser')
#     elems = soup.select('#newer-version > div > div > div.a-fixed-left-grid-col.a-col-right > span.a-size-base.a-color-price')
#     return elems[0].text.strip()

# price = getAmazonPrice('https://www.amazon.com/Automate-Boring-Stuff-Python-Programming/dp/1593275994')
# print('The price is ' + price)

# browser = webdriver.Chrome(executable_path="/mnt/c/Users/ht016/Desktop/programmingLearning/pythonLearning/automateTheBoringStuffWithPythonProgramming/chromedriver.exe") 
# # browser.get('https://automatetheboringstuff.com/')

# # # find only one element 
# # element = browser.find_element_by_css_selector('body > div.main > div:nth-child(1) > ul:nth-child(20) > li:nth-child(1) > a')
# # element.click() 

# # # find multiple matched elements 
# # elements = browser.find_elements_by_css_selector('p')
# # print(len(elements))


# googleMaps = browser.get('http://gebweb.net/optimap/')
# search = browser.find_element_by_css_selector('#bulkButton')
# makeSendDC = '1669, 9 Phetchaburi Rd, Bang Kapi, Huai Khwang, Bangkok 10310'
# addresses = ['21/2 เลิศปัญญา ซอยราชวิถี 9 ถ.ราชวิถี เขตราชเทวี กทม. 10400', '270 แขวงทุ่งพญาไท โรงพยาบาลรามาธิบดี ตึกสิริกิตร์ ศูนย์ไอแมค ชั้น1 เขตราชเทวี กทม', '94/2.​ ถ.มหานคร ต.มหาพฤฒาราม อ.บางรัก.​ กทม']
# search.click()
# input = browser.find_element_by_css_selector('#dialogBulk > form > textarea')
# input.send_keys(makeSendDC + '\n')
# time.sleep(5)
# for address in addresses: 
#     input.send_keys(address + '\n') 
#     time.sleep(5)   
# time.sleep(2)
# addLocation = browser.find_element_by_css_selector('#dialogBulk > form > input')
# addLocation.submit()

# openCalculate = browser.find_element_by_css_selector('#calculateButton')
# time.sleep(2)
# openCalculate.click()

# avoidToll = browser.find_element_by_css_selector('#avoidTolls')
# time.sleep(2)
# avoidToll.click()

# calculate = browser.find_element_by_css_selector('#dialogOptions > p:nth-child(4) > input:nth-child(2)')
# time.sleep(2)
# calculate.click()


##############################################################################
# Read a Excel workbook
# workbook = openpyxl.load_workbook('example.xlsx') # create a workbook object 
# sheet = workbook.get_sheet_by_name('Sheet1') # get a sheet from the workbook 
# workbook.get_sheet_names() # a method to return a list of sheet names 
# cell = sheet['A1'] # A1 cell in 'Sheet1'
# print(cell.value) # a datetime object as the value in the Excel sheet is date and time in 'A1' cell 
# print(str(cell.value)) # the value in the cell 
# print(str(sheet['B1'].value)) # 'Apples', the value in cell 'B1'
# print(str(sheet['C1'].value)) # '73', the value in cell 'C1'
# print(sheet.cell(row=1, column=2) == sheet['B1']) # True

# for i in range(1, 8): 
#     print(i, sheet.cell(row=i, column=2).value)


##############################################################################
# Create and edit Excel workbook
# wb = openpyxl.Workbook()
# print(wb.get_sheet_names())
# sheet = wb.get_sheet_by_name('Sheet')
# sheet['A1'].value
# print(sheet['A1'].value == None)
# sheet['A1'].value = 42
# sheet['A2'].value = 'Hello'
# sheet['A3'].value = '=1+1'

# os.chdir('/mnt/c/Users/ht016/Desktop/')
# wb.save('test.xlsx')
# sheet2 = wb.create_sheet()
# print(wb.get_sheet_names())
# print(sheet2.title)
# sheet2.title = 'My New Sheet Name'
# wb.save('test2.xlsx')

##############################################################################
# Reading and editing PDFs
pdfFile = open('meetingminutes.pdf', 'rb')
reader = PyPDF2.PdfFileReader(pdfFile)
print(reader.numPages) # return numbers of pages in the pdf file
page = reader.getPage(0) # page object holds number of page which starts from 0 as the 1st page
text = page.extractText() # return parsed text as Python String 
for pageNum in range(reader.numPages):
    print(reader.getPage(pageNum).extractText()) 

# create 2 pdf file objects with reading binary mode 
pdfFile1 = open('meetingminutes.pdf', 'rb')
pdfFile2 = open('meetingminutes2.pdf', 'rb') 

reader1 = PyPDF2.PdfFileReader(pdfFile1)
reader2 = PyPDF2.PdfFileReader(pdfFile2)
writer = PyPDF2.PdfFileWriter() # create a writer object which is blank pdf 
for pageNum in range (reader1.numPages):
    page = reader1.getPage(pageNum)
    writer.addPage(page)

for pageNum in range (reader2.numPages):
    page = reader2.getPage(pageNum)
    writer.addPage(page)

os.chdir('/mnt/c/Users/ht016/Desktop')
outputFile = open('combinedminutes.pdf', 'wb')
writer.write(outputFile)
outputFile.close()
pdfFile1.close()
pdfFile2.close()
