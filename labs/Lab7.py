from PIL import Image, ImageFilter
import glob, os

size = 128, 128

for infile in glob.glob("Apex.jpeg"):
    file, ext = os.path.splitext(infile)
    with Image.open(infile) as Legend:
        Legend.thumbnail(size)
        Legend.save(file + ".thumbnail", "JPEG")

with Image.open("Apex.jpeg") as apex:
    
    apex.rotate(45).show()

    apex_blurred = apex.filter(filter=ImageFilter.BLUR).show()









    
    
