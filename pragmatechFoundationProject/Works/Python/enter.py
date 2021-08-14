import json
users=[]
while True:
    ad=input('istifadeci adi daxil et  ')
    soyad=input('soyad daxil et  ')
    yasi=input('yas daxil edin  ')
    dict={"ad":ad,'soyad':soyad,'yas':yasi}
    users.append(dict)
    key=input('davam edilsin? y/n')
    if key=='n':
       yaz=open('users.json','w')
       data=json.dumps(users)
       yaz.write(data)
       print(data) 
       break
    else:
       continue





