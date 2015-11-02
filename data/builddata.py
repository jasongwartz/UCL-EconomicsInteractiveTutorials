
## Build JSON data
import json

while True:
	
	print "\n\nOKAY NEXT\n\nQuestion number?"
	num = raw_input(">>> ")
	if num == "0":
		break
	
	types = ["SingleAnswer","Range","MultipleChoice"]
	print "Question type?"
	for i, j in enumerate(types):
		print str(i) + ": " + j
	qtype = types[int(raw_input(">>> "))]
	
	entry = {"id":num,"type":qtype}
	
	if qtype == "SingleAnswer":
		print "The answer is:"
		entry["answer"] = raw_input(">>> ")
		print "Correct message:"
		entry["correct"] = raw_input(">>> ")
		print "Incorrect message:"
		entry["incorrect"] = raw_input(">>> ")
		
	elif qtype == "MultipleChoice":
		choices = {}
		while True:
			print "Enter choice ID:"
			c_id = raw_input(">>> ")
			if c_id == "0":
				break
			print "Is the solution? Y/n"
			sol = raw_input(">>> ")
			if sol.lower() == "y":
				solution = True
			else:
				solution = False
			print "Message for this answer:"
			msg = raw_input(">>> ")
			choices[c_id] = {"solution":sol,"message":msg}
		entry["choices"]=choices
		

	elif qtype == "Range":
		print "The answer is:"
		entry["answer"] = raw_input(">>> ")
		print "Correct message:"
		entry["correct"] = raw_input(">>> ")
		print "Too LOW message is:"
		entry["lowmessage"] = raw_input(">>> ")
		print "Too HIGH message is:"
		entry["highmessage"] = raw_input(">>> ")	
	
	with open("data.json", "rb") as fp:
		data = json.loads(fp.read())
	with open("data.json", "wb") as fw:
		data.append(entry)
		json.dump(data, fw)