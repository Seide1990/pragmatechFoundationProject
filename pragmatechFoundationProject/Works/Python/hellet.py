import json
dict=()
oxu=open('users.json','r')

library = json.load(oxu)
print(library)
for i in library:
    dict=i
    print(dict['ad'])
for i in library:
    dict=i
    if int(dict['yas'])>23:
        print(dict['ad']+'  '+dict['soyad'])
for i in library:
    dict=i
    print(dict['soyad'].upper())

     