from pymongo import MongoClient
client = MongoClient('localhost',27017)
db = client.TYITDB239720

def read():
    try:
        Col = db.MyCol.find()
        print("\nAll data from database TYITDB239720:")
        for MyCol in Col:
            print(MyCol)
    except Exception:
        print(str(e))
read()
