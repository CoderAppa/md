from pymongo import MongoClient
client = MongoClient('localhost',27017)
db = client.TYITDB239720

def delete():
    try:
        name1 = input("Enter the name:")
        db.MyCol.delete_one({"name":name1})
        print("\nData deleted successfully")
    except Exception:
        print(str(e))
delete()
