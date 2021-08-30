#! python3 
import re, pyperclip

# Create a regex for phone numbers 
phoneRegex = re.compile(r'''
#415-555-0000, 555-0000, (415) 555-0000, 555-0000 ext 12345, ext. 12345, x12345
(                            #a large group to wrap all regex code (start)
((\d\d\d) | (\(\d\d\d\)))?   #area code (optional). This is an optional group with OR "|" for 3 digit w/n wrapped with parenthesis 
(\s|-)                       #first separator. This can be a single whitespace or a dash "-"
\d\d\d                       #first 3 digits 
-                            #serparator
\d\d\d\d                     #last 4 digits 
(((ext(\.)?\s)|x)            #extension word-part (optional). The word-part and number-part are actually in the same group but different line
 (\d{2,5}))?                 #extension number-part (optional). There's a whitespace between word-part and number-part, so this line has a whitespce in the beginnning
)                            #a large group to wrap all regex code (end)
''', re.VERBOSE)

# Create a regex for emial addresses 
emailRegex = re.compile(r'''
# some.+_thing@something.com

[a-zA-Z0-9_.+]+        #name part. We can't use \w directly as it only covers letters and underscore, so we create a customized one with square brackets []. Besides, we only cover dot, underscore, and plus sign in the name part rather than covering all the possible characters in email. 
@                      #@ symbol 
[a-zA-Z0-9_.+]+        #domain name part 
''', re.VERBOSE)

# Get the text off the clipboard. Note that we must open a text or pdf file, select the texts, and use Ctrl c or mouse right lick to copy the texts. pyperclip function will check the clipboard of computer when this python program runs
text = pyperclip.paste() 

# Extract the email/phone from this text 
extractPhone = phoneRegex.findall(text) #findall() method returns list of tuples if regex has groups. A way to solve the problem is to wrap all the regex in a single big group
extractEmail = emailRegex.findall(text)

allPhoneNumbers = [] #a list to keep parsed phone numbers 
for phoneNumber in extractPhone: #loop through the list of tuples 
    allPhoneNumbers.append(phoneNumber[0]) #only the first value of the tuple is the whole phone number 

print(allPhoneNumbers)
print(extractEmail)

# Copy the extracted email/phone to the clipboard 
results = '\n'.join(allPhoneNumbers) + '\n' + '\n'.join(extractEmail) #use join() method to concatenate all phones and emails in a single String value that separate each entity with a new line character '\n'
pyperclip.copy(results) # use Ctrl v or other methods to paste the results to word processing software or text editor