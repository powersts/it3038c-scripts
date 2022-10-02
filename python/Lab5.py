import datetime
birthdate = input("Please put when you were born (example: March 9 2000):")
birthday = datetime.datetime.strptime(birthdate, '%B %d %Y')
today = datetime.datetime.now()
difference = (today - birthday).total_seconds()
print("You are:", difference,"seconds old!")

