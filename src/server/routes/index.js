const router = require('express').Router()
const path = require('path')

const { MongoClient } = require('mongodb')

// Send mystery data
router.get('/api/:mystery', async (req, res) => {
  const data = await main(req.params.mystery).catch(console.error)
  
  if (data) res.status(200).json(data)
  else res.status(404).end()
})

// Serve React app
// router.route('/*').get((req, res) => {
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'))
})

const main = async (mystery) => {

  const uri = "mongodb+srv://admin:14ram1f2ix0b6bZY@cluster0.grcim.mongodb.net/ConnectingTheBeads?retryWrites=true&w=majority"
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

  try {
    await client.connect()

    return await findMystery(client, mystery)

  } catch (error) {
    console.error(error)
  } finally {
    await client.close()
  }
}

// const listDatabases = async (client) => {
//   let databasesList = await client.db().admin().listDatabases()
//   console.log("Databases:")
//   databasesList.databases.forEach(db => console.log(` - ${db.name}`))
// }

const findMystery = async (client, nameOfMystery) => {
  return await client.db('ConnectingTheBeads').collection('mysteries').findOne({ "_id": nameOfMystery })
}

module.exports = router
