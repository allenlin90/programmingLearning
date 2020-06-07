import shelve 
shelfFile = shelve.open('mydata') #"selfFile" is an file object which is like a dictionary type value 
shelfFile['cats'] = ['Zophie', 'Pooka', 'Fat-tail', 'Cleo'] #assign a new "key" to the object to have a list value 
shelfFile['boys'] = ['Mark', 'Roy', 'Dick', 'Bob']
shelfFile.close() 

shelfFile = shelve.open('mydata') #read the stored data 
print(shelfFile['cats']) #['Zophie', 'Pooka', 'Fat-tail', 'Cleo'] 
print(list(shelfFile.keys()))
print(list(shelfFile.values()))
shelfFile.close() 