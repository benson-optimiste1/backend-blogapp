import  express  from "express";
import cors from "cors"; 
import { MongoClient } from "mongodb";

const app = express()
app.use(cors())

const MONGO_URI = 'mongodb+srv://chatelainevelybenson:uHwesZGyR4OboqQK@myfirstcluster.oigrftj.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(MONGO_URI)
const db = client.db('blogapp-c12')
const blogPosts = db.collection('blog-posts')

client.connect()
console.log('connected to Mongo')

app.get('/', async (req, res) => {
   const allPosts =  await blogPosts.find().toArray()
   console.log('allPosts ->', allPosts)
    res.json('here are some blog posts, not yet!🤩')
})

app.listen('8080', ()=> console.log('Api listening in port 8080 😎'))