#!/usr/bin/python

import io
import json

timeline = {}
timeline["TITLE"] = "Gregorian Years Since 1970"
timeline["EVENTS"] = []

for gyear in range(1970,2038):
    timeline["EVENTS"].append({gyear:[0,60]})

print(json.dumps(timeline,indent=1))

#with open("gyears-since-1970.json","w") as file:
#    file.write("json.dump()")
