import re 
message = "Text to be parsed by regex 123-456-7890"
phoneNumberRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d') 
mo = phoneNumberRegex.search(message)
print(mo.group()) #123-456-7890
print(phoneNumberRegex.findall(message))