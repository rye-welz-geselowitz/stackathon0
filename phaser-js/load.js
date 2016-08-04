    var loadState={
        //nothing to load yet
        preload: function(){
            var loadLabel=game.add.text(game.world.centerX,game.world.centerY,'Loading...',mediumGray); 
            loadLabel.anchor.set(.5);
        },
        create: function(){
            game.state.start('instructions');
        }
    }