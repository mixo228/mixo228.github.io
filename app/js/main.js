var BubbleProblem = window.BubbleProblem || {};

BubbleProblem.Game = (function($)
{
	var Game = function()
	{
		this.init = function()
		{
			$('#start').bind('click', StartGame);
		};
		var StartGame = function()
		{
			$('#start').unbind('click', StartGame)
			$('#dialog').hide('slow');
		};
	}

	return Game;
})(jQuery);

var Game = new BubbleProblem.Game();
Game.init();