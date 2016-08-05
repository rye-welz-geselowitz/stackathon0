    var endState={
        create: function(){
            game.add.sprite(0,0,'mountains');

            //Report scores
            var scoreReport=calculateScores();
            var subjectName=gameData.subject.name;
            var controlName=gameData.currentGame.control.name;
            if(scoreReport.result==='faster'){
                scoreReportText('Congratulations! Your average response time for',subjectName,'was '+scoreReport.avg+' s faster than for',controlName,mediumGreen);
            }
            else if(scoreReport.result==='slower'){
                scoreReportText('Your average response time for',subjectName,'was '+scoreReport.avg+' s slower than for',controlName+' - keep practicing',mediumRed);
            }
            else{
                scoreReportText('Congratulations! Your average response time for',subjectName,'was just as fast as for',controlName,mediumGreen);
            }
            //Reset Scores
            initiateRoundClicker();
            //Replay button
            var readyButton=game.add.text(game.world.centerX,game.world.centerY+120,'Menu',mediumWhite); 
            readyButton.anchor.set(.5);
            readyButton.inputEnabled=true;
            readyButton.events.onInputOver.add(overReady,this);
            readyButton.events.onInputOut.add(overReadyLeave,this);
            readyButton.events.onInputDown.add(toMenu,this);

        }
    }

function scoreReportText(text1,text2,text3,text4,style){
    var reportText1=text1;
    var reportText2=text2;
    var reportText3=text3;
    var reportText4=text4;
    var report1=game.add.text(game.world.centerX,game.world.centerY-80,reportText1,mediumWhite); 
    var report2=game.add.text(game.world.centerX,game.world.centerY-40,reportText2,mediumWhite); 
    var report3=game.add.text(game.world.centerX,game.world.centerY,reportText3,mediumWhite); 
    var report4=game.add.text(game.world.centerX,game.world.centerY+40,reportText4,mediumWhite); 
    report1.anchor.set(.5);
    report2.anchor.set(.5);
    report3.anchor.set(.5);
    report4.anchor.set(.5); 
    report1.setStyle(style);
    report2.setStyle(style);
    report3.setStyle(style);
    report4.setStyle(style);
    //DRY UP!!   
}

function calculateScores(){
    var controlTimes=gameData.currentGame.controlTimes;
    var subjectTimes=gameData.currentGame.subjectTimes;
    controlTimes.avg=parseFloat(controlTimes.reduce(function(sum, a) { return sum + a },0)/(controlTimes.length||1)/1000).toFixed(2);
    subjectTimes.avg=parseFloat(subjectTimes.reduce(function(sum, a) { return sum + a },0)/(subjectTimes.length||1)/1000).toFixed(2);
    if(controlTimes.avg>subjectTimes.avg){
        var percentFaster=parseFloat((controlTimes.avg-subjectTimes.avg)/subjectTimes.avg).toFixed(1);
        return ({percent: percentFaster,avg:controlTimes.avg, result:'faster'})
    }
    if(controlTimes.avg<subjectTimes.avg){
        var percentSlower=parseFloat((subjectTimes.avg-controlTimes.avg)/subjectTimes.avg).toFixed(1);
        return ({percent: percentSlower,avg:subjectTimes.avg, result: 'slower'})
    }
    else{
        return ({result: 'equal'})
    }
}