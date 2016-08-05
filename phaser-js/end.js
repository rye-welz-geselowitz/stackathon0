    var endState={
        create: function(){
            //Report scores
            var scoreReport=calculateScores();
            if(scoreReport.result==='faster'){
                scoreReportText('Congratulations! Your response time for',subjectName,'was '+scoreReport.percent+'% faster than for',controlName,mediumGreen);
            }
            else if(scoreReport.result==='slower'){
                scoreReportText('Your response time for',subjectName,'was '+scoreReport.percent+'% slower than for',controlName+' - keep practicing',mediumRed);
            }
            else{
                scoreReportText('Congratulations! Your response time for',subjectName,'was just as fast as for',controlName,mediumGreen);
            }

            // var scoreReportSubject='Average time for '+subjectName+': '+subjectTimes.avg.toString()+ ' s';
            // var scoreReportControl='Average time for '+controlName+': '+controlTimes.avg.toString()+' s';

            // var subjectScore=game.add.text(game.world.centerX,game.world.centerY+40,scoreReportSubject,mediumWhite); 
            // var controlScore=game.add.text(game.world.centerX,game.world.centerY+80,scoreReportControl,mediumWhite); 
            // subjectScore.anchor.set(.5);
            // controlScore.anchor.set(.5);
            // if(subjectTimes.avg<controlTimes.avg){
            //     subjectScore.setStyle(mediumGreen)
            //     controlScore.setStyle(mediumRed)
            // }
            // if(subjectTimes.avg>controlTimes.avg){
            //     subjectScore.setStyle(mediumRed)
            //     controlScore.setStyle(mediumGreen)
            // }

            //Reset Scores
            controlTimes=[];
            subjectTimes=[];
            fillGameInput();
            //Replay button
            var readyButton=game.add.text(game.world.centerX,game.world.centerY+120,'Replay',mediumWhite); 
            readyButton.anchor.set(.5);
            readyButton.inputEnabled=true;
            readyButton.events.onInputOver.add(overReady,this);
            readyButton.events.onInputOut.add(overReadyLeave,this);
            readyButton.events.onInputDown.add(clickReady,this);

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