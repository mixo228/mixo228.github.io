var BubbleProblem = window.BubbleProblem || {};

BubbleProblem.Game = (function($)
{
	var Game = function()
	{
		var curBubble;

		this.init = function()
		{
			$('#start').bind('click', startGame);
		};
		var startGame = function()
		{
			$('#start').unbind('click', startGame)
			BubbleProblem.ui.hideDialog();
			curBubble = getNextBubble();
		};
	}
	var getNextBubble = function()
	{
		var bubble = BubbleProblem.Bubble.create();
		bubble.getSprite().addClass('bubble_cur');
		$(body).append(bubble);
	}

	return Game;
})(jQuery);

var Game = new BubbleProblem.Game();
Game.init();