module.exports = {
    getAllProducts: async (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        // console.log(req.params)
        let products = await db.getAll(+id)
        // console.log(products)
        res.status(200).send(products)
    }
}