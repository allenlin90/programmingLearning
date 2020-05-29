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
#print(text.strip("mpSa123"))

name = "Alice" 
place = "Main Stree" 
time = "6 pm"
food = "turnips" 
print("Hello " + name + ", you are invited to a party at " + place + " at " + time + ". Please bring " + food + ".")
print("Hello %s, you are invited to a party at %s at %s. Please bring %s." %(name, place, time, food))
#"Hello Alice, you are invited to a party at Main Street at 6pm. Please bring turnips." 