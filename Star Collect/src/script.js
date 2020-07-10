const game = new Phaser.Game(800, 600, Phaser, '', {
	preload: preload,
	create: create,
	update: update
})

let platform;
let player;
let diamonds;

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('diamond', 'assets/star.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0, 0, 'sky');
	
	platform = game.add.group();
	platform.enableBody = true;
	
	let ground = platform.create(0, game.world.height - 64, 'ground');
	ground.scale.setTo(2.2);
	ground.body.immovable = true;
	
	let ledge = platform.create(400, 450, 'ground');
	ledge.body.immovable = true;

	ledge = platform.create(-75, 350, 'ground');
	ledge.body.immovable = true;

	player = game.add.sprite(32, game.world.height - 150, 'dude');
	game.physics.arcade.enable(player);
	player.body.bounce.y = .2;
	player.body.gravity.y = 800;
	player.body.collideWorldBounds = true;
	
	player.animations.add('left', [0, 1, 2, 3], 10, true);
	player.animations.add('right', [5, 6, 7, 8], 10, true);
	player.animations.add('steady', [4], 10, true);
	
	diamonds = game.add.group();
	diamonds.enableBody = true;
	
	for(var i = 0; i < 12; i++){
		let diamond = diamonds.create(i * 70, 40, 'diamond');
		diamond.body.gravity.y = 1000;
		diamond.body.bounce.y = 0.3 + Math.random() * 0.2;
	}
	
	scoreText = game.add.text(16, 16, '', {fontSize: '32px', fill: '#000'});
	cursors = game.input.keyboard.createCursorKeys();
}
let score = 0;
function update(){
	game.physics.arcade.collide(player, platform);
	game.physics.arcade.collide(diamonds, platform);
	game.physics.arcade.overlap(player, diamonds, collectDiamond, null, this);
	
	
	player.body.velocity.x = 0;
	
	if(cursors.left.isDown){
		player.body.velocity.x = -2500;
		player.animations.play('left');
	}
	else if(cursors.right.isDown){
		player.body.velocity.x = 2500;
		player.animations.play('right');
	}
	else{
		player.animations.play('steady');
		player.animations.stop();
	}
	if(cursors.up.isDown  && player.body.touching.down){		
		player.body.velocity.y = -410;
	}
	if (score == 120){
		alert("You win!");
		score = 0;	
	}
}

function collectDiamond(player, diamond){
	diamond.kill();
	
	score += 10;
	scoreText.text = 'Score: ' + score;
}

