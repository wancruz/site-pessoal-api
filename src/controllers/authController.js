const usersRepository = require('../repositories/usersRepository');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await usersRepository.getUsersByEmail(email);

    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    return res.status(200).json({message: 'Login realizado com sucesso'});
}

