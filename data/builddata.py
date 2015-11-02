
## Build JSON data
import json

while True:
	
	print "\n\nOKAY NEXT\n\nQuestion number?"
	num = raw_input(">>> ")
	if num == "0":
		break
	
	types = ["TrueFalse","SingleAnswer","Range","MultipleChoice"]
	print "Question type?"
	for i, j in enumerate(types):
		print str(i) + ": " + j
	qtype = types[int(raw_input(">>> "))]
	print "Question text:"
	text = raw_input(">>> ")
	print "Correct message:"
	correct = raw_input(">>> ")
	print "Incorrect message:"
	incorrect = raw_input(">>> ")
	
	with open("data.json", "rb") as fp:
		data = json.loads(fp.read())
	with open("data.json", "wb") as fw:
		data.append({"id":num,"type":qtype,"text":text,
			"correct":correct,"incorrect":incorrect})
		json.dump(data, fw)