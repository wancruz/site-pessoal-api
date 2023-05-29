const aboutRepository = require('../repositories/aboutRepository')

exports.getAbout = async (req, res) => {
  const about = await aboutRepository.getAbout();
  res.json(about)
}


exports.createAbout = async (req, res) => {
   const about = req.body;
   const newAbout = await aboutRepository.createAbout(about);
   res.json(newAbout);
}

exports.updateAbout = async (req, res) => {
   const about = req.body;
   const newAbout = await aboutRepository.updateAbout(about);
   res.json(newAbout);
}


exports.deleteAbout = async (req, res) => {
   await aboutRepository.deleteAbout();
   res.json({message: `Informações deletadas`});
}

