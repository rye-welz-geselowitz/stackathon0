    var endState={
        create: function(){
            //Thanks for playing
            var endLabel=game.add.text(game.world.centerX,game.world.centerY,'Thanks for playing!',mediumGray); 
            endLabel.anchor.set(.5);
            //Report scores
            calculateScores();
            var scoreReportSubject='Average time for '+subjectName+': '+subjectTimes.avg.toString()+ ' s';
            var scoreReportControl='Average time for '+controlName+': '+controlTimes.avg.toString()+' s';

            var subjectScore=game.add.text(game.world.centerX,game.world.centerY+40,scoreReportSubject,mediumWhite); 
            var controlScore=game.add.text(game.world.centerX,game.world.centerY+80,scoreReportControl,mediumWhite); 
            subjectScore.anchor.set(.5);
            controlScore.anchor.set(.5);
            if(subjectTimes.avg<controlTimes.avg){
                subjectScore.setStyle(mediumGreen)
                controlScore.setStyle(mediumRed)
            }
            if(subjectTimes.avg>controlTimes.avg){
                subjectScore.setStyle(mediumRed)
                controlScore.setStyle(mediumGreen)
            }
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