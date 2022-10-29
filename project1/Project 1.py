from datetime import datetime

current = datetime.now()
time = current.strftime("%I:%M:%S")

print("It is currently: " + time)
