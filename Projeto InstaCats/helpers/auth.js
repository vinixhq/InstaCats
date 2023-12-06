module.exports.checkAuth = function(req, res, next) {
  const userId = request.session.userId

  if(!userId){
    response.redirect('/login')
  }

  next();
}