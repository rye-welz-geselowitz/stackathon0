app.config(function ($stateProvider) {
    $stateProvider.state('game', {
        url: '/game',
        controller: 'GameController',
        templateUrl: 'js/game/game.html'
    });

});

app.controller('GameController', function ($scope) {
    var gameWindow=gameframe.contentWindow;
    $scope.playersData={
    pronouns:{
        //S: subject, O: object: P1: possessive1, P1: possesive2: SR: self-referential 
        male:{S:'he',O:'him',P1:'his',P2:'his',SR:'himself'},
        female:{S:'she',O:'her',P1:'her',P2:'hers',SR:'herself'},
        neutral:{S:'they',O:'them',P1:'their',P2:'theirs',SR:'themself'}
    },
    subject:{
        name: 'Annie',
        PGP: 'female',
        associatedWords: ['ponies','puppies','dancing','American','woman','New Yorker'],
        unAssociatedWords: ['fish','exercise','war','going to the gym'],
        sentences: [
            {array: ['I love',null],POS: 'O'},
            {array: [null,'is a boss'],POS:'S'}
        ]
    },
    controls: [
        {name: 'Brandon',
        PGP: 'male',
        sentences: [
            {array: ['Is that',null,'puppy?'],POS: 'P1'},
            {array: ['Has he seen',null,'?'],POS:'SR'}
        ]},
        {name: 'Mom',
        PGP: 'female',
        sentences: [
            {array: ["Isn't",null,'a great mother?'],POS: 'S'},
            {array: ['Give',null,'a flower'],POS:'O'}
        ]}   
    ]
}
    document.querySelector('iframe').onload = function(){
        //TODO: This SHOULD make sure the data gets sent only once the iframe is loaded. But make sure!
        gameWindow.postMessage($scope.playersData,'/')         
    };

});