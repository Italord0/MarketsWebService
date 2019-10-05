//index "lista de objetos" , show "mostra um objeto", store "Cria um objeto", update "Alterar objeto", destroy "Deletar objeto"
const Market = require('../model/Market');

module.exports = {
    async store(req, res) {

        const { filename } = req.file;
        const { name , adress , active } = req.body;

        //const market = await Market.create(req.body)

        return res.json({result : true});
    }
};