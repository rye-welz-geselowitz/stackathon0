    var loadState={
        //nothing to load yet
        preload: function(){
            var loadLabel=game.add.text(game.world.centerX,game.world.centerY,'Loading...',mediumGray); 
            loadLabel.anchor.set(.5);
            game.load.image('mountains', 'assets/mountains.png');
            game.load.image('water_mountains', 'assets/water_mountains.png');
            game.load.image('crate', 'assets/crate.png');
            game.load.image('sky', 'assets/sky.png');

        },
        create: function(){
            game.state.start('menu');
        }
    }