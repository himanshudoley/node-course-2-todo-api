
const {MongoClient,ObjectID}=require('mongodb');  //destructuring

/*var obj=new ObjectID();			//creating new ID everytime we run this
console.log(obj);*/

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err){
		return console.log('unable to connect'); 
	}
	console.log('connected to mongodb server');
	const db=client.db('TodoApp')


	db.collection('Todos').insertOne({
		text:'Something to do',
		complete:false
	},(err,result)=>{         //callback fn
		if(err){
			return console.log('unable to insert todo',err);
		}
		console.log(JSON.stringify(result.ops,undefined,2))
	});


	db.collection('users').insertOne({
		name: 'himanshu',
		age: 24,
		location: 'New Delhi'
	},(err,result)=>{
		if(err){
			return console.log('unable to insert user',err);
		}
		console.log(result.ops);
	});

	client.close();
});