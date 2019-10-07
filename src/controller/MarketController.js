//index "lista de objetos" , show "mostra um objeto", store "Cria um objeto", update "Alterar objeto", destroy "Deletar objeto"
const Market = require('../model/Market');
const User = require('../model/User');

module.exports = {
    async store(req, res) {

        const { filename } = req.file;
        const { name , adress , active } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        console.log(adress);

        if(!user){
            return res.status(400).json({
                error : 'User not found.'
            });
        }

        const market = await Market.create({
            user : user_id,
            name : name,
            image : filename,
            adress : JSON.parse(adress),
            active : active

        })

        return res.json({ market });
    }
};