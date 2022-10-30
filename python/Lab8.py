import requests, re 
from bs4 import BeautifulSoup

r = requests.get("https://www.microcenter.com/product/611198/asus-tuf-gaming-vg32vq-315-2k-wqhd-(2560-x-1440)-144hz-curved-screen-gaming-monitor").content
soup = BeautifulSoup(r, 'html.parser')
details = soup.find("h1")
thisspan = ""
for d in details:
    title = d.find("span")
    if title is not None and title != -1:
        thisspan = title
print("Name: %s Price: $%s" % (thisspan.get("data-name"),(thisspan.get("data-price"))))
