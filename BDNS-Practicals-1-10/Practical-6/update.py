from pymongo import MongoClient
client = MongoClient('localhost',27017)
db = client.TYITDB239720

def update():
    try:
        name1 = input("Enter the Name:")
        age1 = input("Enter the Age to update:")
        db.MyCol.update_one({"name":name1},{"$set":{"age":age1}})
        print("\nRecords updated successfully\n")
    except Exception:
        print(str(e))
update()
