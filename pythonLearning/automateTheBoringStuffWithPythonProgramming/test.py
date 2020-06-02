import re 
message = " 123-456-7899 Text to be parsed by regex 123-456-7890"
phoneNumberRegex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)') 
mo = phoneNumberRegex.search(message)
#print(mo.group()) #123-456-7890
#print(phoneNumberRegex.findall(message)) 
#print(mo.group(1)) #123

batRegex = re.compile(r"Bat(man|mobile|copter|bat)")
mo = batRegex.search("Batmobile lost a wheel") 
#print(mo.group())

batRegex = re.compile(r'Bat(wo)?man')
mo = batRegex.search("The Adventure of Batman")
#print(mo.group()) #Batman 
mo = batRegex.search("The Adventure of Batwoman")
#print(mo.group()) #Batwoman 
mo = batRegex.search("The Adventure of Batwowowoman")
mo == None #True 

batRegex = re.compile(r'Bat(wo)*man')
mo = batRegex.search("The Adventure of Batwowowoman")
#print(mo.group()) #Batwowowoman 

batRegex = re.compile(r'Bat(wo)+man') #"wo" must show at least once 
mo = batRegex.search("The Adventure of Batman")
mo == None #True 

batRegex = re.compile(r'Bat(wo){3}man') #"wo" must show exactly 3 times
mo = batRegex.search("The Adventure of Batwowowoman")
#print(mo.group()) #Batwowowoman

phoneRegex = re.compile(r'((\d\d\d)-(\d\d\d-\d\d\d\d))') #3 groups, as 1 of the groups wraps the whole regex
#print(phoneRegex.findall("123-456-7890 123-456-7890"))

vowelRegex = re.compile(r'[^aeiouAEIOU\s]') 
print(vowelRegex.findall("Robocop eats bady food"))