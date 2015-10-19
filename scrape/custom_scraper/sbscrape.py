import requests
import re
import os


home = requests.get("http://www.sambaker.com/econ")

re_url = re.compile('<a href="?\'?([^"\'>]*)')
urls = re.findall(re_url, home.content)

for u in urls:
	if "http://" not in u: # he always uses relative urls
		link = "http://www.sambaker.com/econ/" + u
		response = requests.get(link)
		
		directory = os.path.dirname("./content/%s" % u)
		if not os.path.exists(directory):
		    os.makedirs(directory)
		
		with open("./content/%s" % u, "wb") as fp:
			fp.write(response.content)

		js = u.replace("html", "js")
		js_link = "http://www.sambaker.com/econ/" + js
		with open("./content/%s" % js, "wb") as fp:
			fp.write(requests.get(js_link).content)

		
		imgs = []

		for line in response.content.split("\n"):
			if "<img" in line:
				imgs.append(re.findall('src="([^"]+)"', line))

		for x in imgs:
			for i in x:
				if "http" not in i:
					i_link = os.path.split(link)[0] + "/" + i
				else:
					i_link = i
					i = os.path.split(i)[1]
	
				with open(os.path.join(directory, i), "wb") as img_fp:
					img_fp.write(requests.get(i_link).content)