var friendsData = require("../data/friends");

module.exports = function(app){
    //creating route to the friends data js file
    app.get("/api/friends", function(req,res){
        res.json(friendsData);
        res.send(friendsData);
        console.log(friendsData);
    })
    app.post("/api/friends", function(req, res){
            //pushing new data to friends array
            friendsData.push(req.body);
            res.json(true);
            console.log("This is req.body: " + req.body);
        
    })
}