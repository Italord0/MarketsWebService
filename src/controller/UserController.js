//index "lista de objetos" , show "mostra um objeto", store "Cria um objeto", update "Alterar objeto", destroy "Deletar objeto"
const User = require('../model/User');

module.exports = {
    async store(req, res) {
 
        const { email } = req.body;

        let user =  await User.findOne({ email });

        if(!user){
            user = await User.create( { email } );   
        }

        return res.json(user);
    }
};