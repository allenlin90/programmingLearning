import os 
totalSize = 0 
for file in os.listdir(os.getcwd()): 
    if not os.path.isfile(os.path.join(os.getcwd(), file)): 
        continue 
    totalSize += os.path.getsize(os.path.join(os.getcwd(), file))
print(totalSize)