/* global app */
app.factory('DataService', function($http){
    var players =[];
    var service = {
        loadPlayers: function(){
            $http.get('http://bcw-getter.herokuapp.com/?url=http%3A%2F%2Fapi.cbssports.com%2Ffantasy%2Fplayers%2Flist%3Fversion%3D3.0%26SPORT%3Dfootball%26response_format%3Djson')
            .success(function (data){
                players = data.body.players;
                //console.lgo(players);
            })
        },
        getAllPlayers: function(){
            return players;
        },
        getPlayersByTeam: function(team){
           return teams;
        },
        getPlayersByPosition: function(team){
           _____
        }
    }

    return service;
});