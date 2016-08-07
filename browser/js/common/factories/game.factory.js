app.factory('GameFactory', function ($http) {
    var GameFactory={};
    GameFactory.postGame=function(game){
        return $http.post('/api/games',{data:JSON.stringify(game)})
        .then(function(res){
            console.log(res);
            return res.data;
        })
    }
    GameFactory.getGame=function(hash){
        return $http.get('/api/games/'+hash)
        .then(function(res){
            console.log(res);
            return res.data;
        })        
    }
    GameFactory.getDemoData=function(){
        return {
    pronouns:{
        male:{S:'he',O:'him',P1:'his',P2:'his',SR:'himself'},
        female:{S:'she',O:'her',P1:'her',P2:'hers',SR:'herself'},
        neutral:{S:'they',O:'them',P1:'their',P2:'theirs',SR:'themself'}
    },
    subject:{
        name: 'CJ',
        PGP: 'female',
        associatedWords: ['ponies','puppies','dancing','American','woman','New Yorker'],
        unAssociatedWords: ['fish','exercise','war','going to the gym'],
        sentences: [
            {array: ['I love',0],POS: 'O'},
            {array: [0,'is a boss'],POS:'S'}
        ]
    },
    controls: [
        {name: 'Brandon',
        PGP: 'male',
        sentences: [
            {array: ['Is that',0,'puppy?'],POS: 'P1'},
            {array: ['Has he seen',0,'?'],POS:'SR'}
        ]},
        {name: 'Mom',
        PGP: 'female',
        sentences: [
            {array: ["Isn't",0,'a great mother?'],POS: 'S'},
            {array: ['Give',0,'a flower'],POS:'O'}
        ]}   
    ]
}
    }
    return GameFactory;
});