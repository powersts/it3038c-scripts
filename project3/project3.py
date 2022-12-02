from datetime import datetime

current = datetime.now()
time = current.strftime("%I:%M:%S")
date = current.strftime("%B %d, %Y") 
print("The Date is: " + date)
print("It is currently: " + time)