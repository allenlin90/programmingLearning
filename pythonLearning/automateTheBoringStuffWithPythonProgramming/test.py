import pprint
message = '''It was a bright cold day in Apirl, 
and the clocks were striking thirteen''' 
count = {}
for character in message.upper(): 
    count.setdefault(character, 0)
    count[character] += 1
textInOrder = pprint.pformat(count)
#print(type(textInOrder))

text = "SpamSpamSpamSpamEggsBoilerHeadSpamSpamSpamSpam" 
print(text.strip("mpSa123"))