const Game = require('../models/Game');

exports.index = async(request, response, next) => {
  try{
    const games = await Game.find().populate('Genre');
    response.status(200).json(games);
  }
  catch(error){
    next(error);
  }
};

exports.show = async(request, response, next) => {
  try{
    const {id} = request.params;
    const game = await Game.findById(id).populate('Genre');
    response.status(200).json(game);
  }
  catch(error){
    next(error);
  }
};

exports.create = async(request, response, next) => {
  try{
    const {title, year, genre} = request.body;
    const game = await Game.crete({title, year, genre});
    response.status(200).json({
      message: "Game was successfully created",
      status: "success",
      game
    });
  }
  catch(error){
    next(error);
  }
};

exports.update = async(request, response, next) => {
  try{
    const {title, year, genre} = request.body;
    await Game.findOneAndUpdate({_id:id}, {title, year, genre});
    const game = await Game.findById(id);
    response.status(200).json({
      message: "Game was successfully updated",
      status: "success",
      game
    });
  }
  catch(error){
    next(error);
  }
};

exports.destroy = async(request, response, next) => {
  try{
    const {id} = request.body;
    await Game.findOneAndDelete({_id:id});
    response.status(200).json({
      message: "Game was successfully deleted",
      status: "success"
    });
  }
  catch(error){
    next(error);
  }
};
