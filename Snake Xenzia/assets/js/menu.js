var Menu = {
	preload : function(){
		// The first argument is how our image will be refered to 
		// The second is the path to our file.
		game.load.image('menu', './assets/images/menu.png');
	}
	create: function(){
		// Add a sprite to your game, here the sprite will be the game's logo
		// Parameters are : X , Y , image name(see below)
		this.add.sprite(0, 0, 'menu');
	}
}
