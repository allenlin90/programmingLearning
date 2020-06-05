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
#print(vowelRegex.findall("Robocop eats bady food"))

beginsWithHelloRegex = re.compile(r'^Hello')
#print(beginsWithHelloRegex.findall('Hello there!'))
#print(beginsWithHelloRegex.search('He said "Hello there!"') == None) 

endsWithWorldRegex = re.compile(r'world!$')
#print(endsWithWorldRegex.findall('Hello world!')) #['world!']
#print(endsWithWorldRegex.search('He said "Hello there!"') == None) #True

allDigitsRegex = re.compile(r'^\d+$')
#print(allDigitsRegex.findall('12345678901234567890'))
#print(allDigitsRegex.search('123456789x01234567890') == None)

atRegex = re.compile(r'.{1,2}at')
#print(atRegex.findall('The cat in the hat sat on the flat mat.'))

nameRegex = re.compile(r'First Name: (.*) Last Name: (.*)')
#print(nameRegex.findall('First Name: Al Last Name: Sweigart'))

serve = '<To serve humans> for dinner.>' 
nongreedy = re.compile(r'<(.*?)>')
#print(nongreedy.findall(serve))
greedy = re.compile(r'<(.*)>')
#print(greedy.findall(serve)) 

prime = 'Serve the public trust.\nProtect the innocent.\nUpload the law.' 
#print(prime)

dotStar = re.compile(r'.*')
#print(dotStar.search(prime))

dotStar = re.compile(r'.*', re.DOTALL) 
#print(dotStar.search(prime))

vowelRegex = re.compile(r'[aeiou]', re.I) 
#print(vowelRegex.findall('Al, why does your programming book talk about RoboCop so much?'))


##################################################

namesRegex = re.compile(r'Agent \w+') 
#print(namesRegex.findall('Agent Alice gave the secret documents to Agent Bob.')) 
#print(namesRegex.sub('REDACTED', 'Agent Alice gave the secret documents to Agent Bob.')) #substitute matched value with the given argument 

namesRegex = re.compile(r'Agent (\w)\w*')
print(namesRegex.findall('Agent Alice gave the secret documents to Agent Bob.'))
print(namesRegex.sub('Agent \\1****', 'Agent Alice gave the secret documents to Agent Bob.'))
