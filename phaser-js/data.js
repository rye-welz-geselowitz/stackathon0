//DUMMY VALUES??!
var gameData={
    pronouns:{
        //S: subject, O: object: P1: possessive1, P1: possesive2: SR: self-referential 
        male:{S:'he',O:'him',P1:'his',P2:'his',SR:'himself'},
        female:{S:'she',O:'her',P1:'her',P2:'hers',SR:'herself'},
        neutral:{S:'they',O:'them',P1:'their',P2:'theirs',SR:'themself'}
    },
    subject:{
        name: '<name>',
        PGP: 'neutral',
        associatedWords: ['<word>'],
        unAssociatedWords: ['<word'],
        sentences: [
            {array: [null,'<words>'],POS: 'S'}]
    },
    controls: [
        {name: '<name>',
        PGP: 'neutral',
        sentences: [
            {array: [null,'<words>'],POS: 'S'},
        ]}
    ]
}

console.log('loading iframe')
window.addEventListener("message", receiveMessage, false);
function receiveMessage(event){
	console.log('receivingMessage')
	//TODO: FIGURE OUT TIMING!!!
    gameData=event.data;
    
}