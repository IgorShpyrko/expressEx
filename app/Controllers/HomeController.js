const HomeController = {
  home: function(Request, Response){
    console.log(Request.query);
    Response.send(Request.name);
  },
  post: function(Request, Response){
    Response.send(Request.body);
  },
};

module.exports = HomeController;