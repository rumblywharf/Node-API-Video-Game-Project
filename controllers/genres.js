const Genre = require('../models/Genre');

exports.index = async(request, response, next) => {
  try{
    const genres = await Genre.find();
    response.status(200).json(genres);
  }
  catch(error){
    next(error);
  }
};

exports.show = async(request, response, next) => {
  try{
    const {id} = request.params;
    const genre = await Genre.findById(id);
    const games = await genre.getGames();
    response.status(200).json({...genre._doc, games});
  }
  catch(error){
    next(error);
  }
};

exports.create = async(request, response, next) => {
  try{
    const {name} = request.body;
    const genre = await Genre.create({name});
    response.status(200).json({
      message: "Genre was successfully created",
      status: "success",
      genre
    });
  }
  catch(error){
    next(error);
  }
};

exports.update = async(request, response, next) => {
  try{
    const {id, name} = request.body;
    await Genre.findOneAndUpdate({_id:id}, {name});
    const genre = await Genre.findById(id);
    response.status(200).json({
      message: "Genre was successfully updated",
      status: "success",
      genre
    });
  }
  catch(error){
    next(error);
  }
};

exports.destroy = async(request, response, next) => {
  try{
    const {id} = request.body;
    await Genre.findOneAndDelete({_id:id});
    response.status(200).json({
      message: "Genre was successfully deleted",
      status: "success"
    });
  }
  catch(error){
    next(error);
  }
};
