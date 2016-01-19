#modifydata.py

import json

with open("allquestiondata.json", "rb") as fp:
	x = json.loads(fp.read())

y = {}

for i in x:
	if i["type"] == "MultipleChoice":
		try:
			for j in i["choices"]:
				s = i["choices"][j]["solution"]
				if s == "y":
					i["choices"][j]["solution"] = True
				elif s == "n":
					i["choices"][j]["solution"] = False
		except KeyError:
			i["choices"] = {}
	
	if i["type"] == "TrueFalse":
		print i["answer"]
		# change these to booleans also!
	
	try:
		print i["text"]
	except KeyError:
		i["text"] = ""
	
	y[i["id"]] = i
	

with open("allquestiondata-adjusted.json", "w") as fp:
	json.dump(y, fp, indent=4)