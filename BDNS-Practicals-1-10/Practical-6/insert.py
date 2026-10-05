from pymongo import MongoClient
client = MongoClient('localhost',27017)
db = client.TYITDB239720

def insert():
    try:
        name1 = input("Enter the Name:")
        age1 = input("Enter the Age:")
        dept1 = input("Enter the Department:")
        pin1 = input("Enter the Pin No:")
        db.MyCol.insert_one({"name":name1,"age":age1,"dept":dept1,"pin":pin1})
        print("Inserted data successfully")
    except Exception:
        print(str(e))
insert()
