import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.BasicDBObject;
import com.mongodb.MongoClient;
import com.mongodb.WriteResult;

public class update {
  public static void main(String[] args) {
    MongoClient mongo = new MongoClient("localhost",27017);
    System.out.println("Connected to the database successfully.");
    DB db = mongo.getDB("TYITDB239720");
    DBCollection col = db.getCollection("myCol");
    BasicDBObject query = new BasicDBObject("id",1);
    BasicDBObject update = new BasicDBObject();
    update.put("$set",new BasicDBObject("Age",27));
    WriteResult result = col.update(query,update);
    mongo.close();
  }
}
