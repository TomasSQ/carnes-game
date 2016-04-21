(function ($) {

	'use strict';

	var shuffle = function (array) {
		return array.sort(function () {
			return 0.5 - Math.random();
		});
	};

	var games = {
		1 : {
			name : 'Regiões do boi',
			description : 'Aprenda as regiões do boi marcando suas partes corretamente!',
			questions : [{
					name : 'As regiões 1, 2 e 3 são, respectivamente:',
					img : 'regioesBoiQ.png',
					answers : [
						{text : 'Peito, região distal do músculo toráxico, região distal do músculo pélvico'},
						'Peito, região proximal do músculo toráxico, região proximal do músculo pélvico',
						'Região proximal do músculo toráxico, costado e flaco, região pélvica'
					]
				}, {
					name : 'As regiões 5 e 6 são, respectivamente:',
					img : 'regioesBoiQ.png',
					answers : [
						'Região cervical, região dorso-lombar',
						{text : 'Região pélvica, região dorso-lombar'},
						'Região proximal do músculo pélvico, região pélvica'
					]
				}, {
					name : 'As regiões 4 e 8 são, respectivamente:',
					img : 'regioesBoiQ.png',
					answers : [
						'Região distal do músculo pélvico, peito',
						'Região pélvica, região cervical',
						{text : 'Região proximal do músculo pélvico, região proximal do músculo toráxico'},
					]
				}, {
					name : 'As regiões 7 e 9 são, respectivamente:',
					img : 'regioesBoiQ.png',
					answers : [
						'Peito, região dorso-lombar',
						{text: 'Região cervical, costado e flanco'},
						'Região proximal do músculo toráxico, costado e flanco'
					]
				}
			],
			rightAnswers : [0, 1, 2]
		}, 2 : {
			name : 'Tecido conjuntivo',
			description : 'Manja dos colageno? Bora manjar mais então',
			questions : [{
					name : 'O que é o 1?',
					img : 'colagenoQ.png',
					answers : [
						'Eliseu',
						{text : 'Epmísio'},
						'Perimísio',
						'Endomísio'
					]
				}, {
					name : 'O que é o 2?',
					img : 'colagenoQ.png',
					answers : [
						'Paraíso',
						{text : 'Perimísio'},
						'Epmísio',
						'Endomísio'
					]
				},{
					name : 'O que é o 3?',
					img : 'colagenoQ.png',
					answers : [
						'Endosperma',
						{text : 'Endomísio'},
						'Perimísio',
						'Epmísio'
					]
				}
			]
		}
	},
		rightAnswers = 0;

	var getQuestionsHTML = function (questionsOriginal) {
		var questionsHTML = [],
			questions = shuffle(questionsOriginal);

		for (var i = 0; i < questions.length; i++) {
			var img = !questions[i].img ? '' : '<img src="imgs/' + questions[i].img + '" class="col s12 l4"></img><div class="clearfix"></div>',
				question =
				'<ul class="collection with-header question" data-question-id="1">' +
					'<li class="collection-header">' + img + '<h4>' + questions[i].name + '</h4></li>';

			var answers = shuffle(questions[i].answers);
			for (var j = 0; j < answers.length; j++) {
				var answer = answers[j],
					isRight = $.isPlainObject(answer),
					text = isRight ? answer.text : answer;

				question += '<li class="answer collection-item' + (isRight ? ' ra' : '') + '">' +
								'<div>' + text + '</div>' +
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
