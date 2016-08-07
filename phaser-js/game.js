


var game=new Phaser.Game(800,600,Phaser.AUTO,'');
game.state.add('boot',bootState);
game.state.add('load',loadState);
game.state.add('menu',menuState);
game.state.add('instructions',instructionsState);
game.state.add('play',playState);
game.state.add('wordrain-instructions',wordrainInstructionsState);
game.state.add('wordrain',wordrainState);
game.state.add('end',endState);
game.state.add('wordrain-end',wordrainEndState);

game.state.start('boot');
