
const {MongoClient,ObjectID}=require('mongodb');  //destructuring

/*var obj=new ObjectID();			//creating new ID everytime we run this
console.log(obj);*/

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err){
		return console.log('unable to connect'); 
	}
	console.log('connected to mongodb server');

	//const db=client.db('TodoApp')


// fetching data having name only himanshu

	client.collection('users').find({name:'himanshu'}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs,undefined,2));
	});
	
	client.close();
});