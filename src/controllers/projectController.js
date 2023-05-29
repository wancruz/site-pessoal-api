const projectRepository = require('../repositories/projectRepository');

exports.getProject = async (req, res) => {
  const project = await projectRepository.getProject();
  res.json(project);
  }
 
  exports.getProjectById = async (req, res) => {
    const id = parseInt(req.params.id);
    const project = await projectRepository.getProjectById(id);
    res.json(project);
  }
  
  exports.createProject = async (req, res) => {
    const project = req.body;
    const newProject = await projectRepository.createProject(project);
    res.json(newProject);
  }
  
  exports.updateProject = async (req, res) => {
    const id = parseInt(req.params.id);
    const project = req.body;
    const updatedProject = await projectRepository.updateProject(id, project);
    res.json(updatedProject);
  }
  
  exports.deleteProject = async (req, res) => {
    const id = parseInt(req.params.id);
    await projectRepository.deleteProject(id);
    res.json({message: `Projeto ${id} deletado com sucesso!`});
    }
  

   
   