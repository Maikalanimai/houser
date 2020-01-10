module.exports = {
  getHouses: (req, res) => {
    const db = req.app.get('db')
    db.get_houses().then(result => {
      res.status(200).send(result)
    })
  },
  addHouse: (req,res) => {
    const db = req.app.get('db')
    const {name, address, city, state, zip, img, mortgage, rent} = req.body
    db.add_house( name, address, city, state, zip, img, mortgage, rent).then(result => {
      res.status(201).send(result)
    })
  }, 
  deleteHouse: (req,res) => {
    const db = req.app.get('db')
    const {id} = req.params
    db.delete_house(id).then(result => {
      res.status(200).send(result)
    })
  }
}