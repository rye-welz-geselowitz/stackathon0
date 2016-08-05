    //ROUND ONE
    var subjectName='Jamie';
    var subjectPGP='she/her'
    var controlName='Bill';
    var controlPGP='he/him';
    var immutableInput=[{
        subjectPronouns:['She','He','They'],
        correctAnswer: 'She',
        sentencePre: 'JAMIE went to the store.',
        sentencePost: 'She went to the store.',
        isSubject: true
    },{
        subjectPronouns:['her','him','them'],
        correctAnswer: 'her',
        sentencePre: 'I love JAMIE.',
        sentencePost: 'I love her.',
        isSubject: true 
    },
    {
        subjectPronouns:['her','him','them'],
        correctAnswer: 'him',
        sentencePre: 'I drove BILL to the store.',
        sentencePost: 'I drove him to the store.',
        isSubject: false         
    },
    {
        subjectPronouns:['her','his','their'],
        correctAnswer: 'her',
        sentencePre: "Where is JAMIE'S house?",
        sentencePost: 'Where is her house?',
        isSubject: true 
    },
    {
        subjectPronouns:['he','she','they'],
        correctAnswer: 'he',
        sentencePre: 'Do you think BILL will be there?',
        sentencePost: 'Do you think he will be there?',
        isSubject: false         
    }
    ]
    var gameInput=[];
    fillGameInput();

    //ROUND TWO
    var wordDropData={
        me: ['ponies','she','her','puppies','coding','hiking','movies','Jamie','American','student','New Yorker','girl','woman'],
        notMe: ['he','him','exercise','swimming','meat','homework','spinach']
    }