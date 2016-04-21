(function ($) {

	'use strict';

	var games = {
		1 : {
			name : 'Jogo 1',
			description : 'Descrição jogo 1',
			questions : [{
					name : 'Pergunta 1',
					answers : ['Resposta 1', 'Resposta 2', 'Resposta 3', 'Resposta 4'],
					rightAnswer : 1
				}, {
					name : 'Pergunta 2',
					answers : ['Resposta 1', 'Resposta 2', 'Resposta 3', 'Resposta 4'],
					rightAnswer : 2
				}
			],
			rightAnswers : [2, 3]
		}
	},
		rightAnswers = 0;

	var getQuestionsLinks = function (questions) {
		var questionsLinks = [];

		for (var i = 0; i < questions.length; i++) {
			questionsLinks.push('<li class="chip margin-right">' + (i + 1) + '</li>');
		}

		//return questionsLinks.join('');
	};

	var getQuestionsHTML = function (questions) {
		var questionsHTML = [];

		for (var i = 0; i < questions.length; i++) {
			var question =
				'<ul class="collection with-header question" data-question-id="1">' +
					'<li class="collection-header"><h4>' + questions[i].name + '</h4></li>';

			for (var j = 0; j < questions[i].answers.length; j++) {
				question += '<li class="answer collection-item' + (questions[i].rightAnswer == j ? ' ra' : '') + '">' +
								'<div>' + questions[i].answers[j] +
									'<a href="#!" class="secondary-content"><i class="material-icons">send</i></a>' +
								'</div>' +
							'</li>';
			}

			question += '</ul>';

			questionsHTML.push(question);
		}

		return questionsHTML.join('') + '<ul class="collection with-header question"><li class="collection-header"><h4></h4><a href="#">Voltar</a></li></ul>';
	};

	var goToNextQuestion = function () {
		var correct = this.hasClass('ra');

		this.closest('.question').find('.ra').addClass('green accent-3');
		if (!correct) {
			this.addClass('red darken-2');
		}

		rightAnswers += correct;

		var that = this;
		setTimeout(function () {
			that.closest('.question').hide().next().show();
			if (that.closest('.question').next().next().length === 0) {
				var results = that.closest('.question').next();

				results
					.find('h4').text('Você acertou ' + rightAnswers + ' de ' + that.closest('.question').siblings().length).end()
					.find('a').click(function () {
						endGame();
					});
			}
		}, 1000);
	};

	var startGame = function (game) {
		rightAnswers = 0;

		this.find('.game-start')
			.find('.name').text(game.name).end()
			.find('.description').text(game.description).end()
			.find('.go-to-question').html(getQuestionsLinks(game.questions)).end()
			.find('.questions').html(getQuestionsHTML(game.questions))
				.find('.question:not(:first-child)').hide().end()
				.find('.answer').click(function () {
					$(this).unbind();
					goToNextQuestion.call($(this));
				}).end()
			.end()
			.show().end()
			.find('.games-list').hide();
	};

	var endGame = function () {
		$('.game-start').hide();
		$('.games-list').show();
	};

	$.fn.config = function () {
		var container = this;

		container
			.find('.games-list [data-game-id]').click(function () {
				startGame.apply(container, [games[$(this).data('game-id')]]);
			}).end()
			.find('.get-back').click(function () {
				endGame();
			});

		return container;
	};

})(window.jQuery);
