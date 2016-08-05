app.factory('GameFactory', function ($http) {
    var GameFactory={};
    GameFactory.postGame=function(game){
        console.log('in factory');
        return $http.post('/api/games',{data:game})
        .then(function(res){
            console.log(res);
            return res.data;
        })
    }
    return GameFactory;
});