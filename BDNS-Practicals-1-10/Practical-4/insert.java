import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.MongoClient;
import org.bson.Document;

public class insert {
  public static void main(String[] args) {
    MongoClient mongo = new MongoClient("localhost",27017);
    System.out.println("Connected to the database successfully.");
    MongoDatabase database = mongo.getDatabase("TYITDB239720");
    MongoCollection<Document> collection = database.getCollection("myCol");
    System.out.println("Collection myCol selected successfully");
    Document document = new Document();
    document.append("id",1);
    document.append("Name","Romal");
    document.append("RollNo",239720);
    document.append("Age",20);
    document.append("College","MCC");
    collection.insertOne(document);
    System.out.println("Document inserted successfully");
  }
}
