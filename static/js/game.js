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
		}, 3 : {
			name : 'Lorem ipsum dolor',
			description : 'Dado um nome em latim, marque sua tradução para o português',
			questions : [{
					name : 'Psoas major',
					answers : [
						'Contra-filé',
						{text : 'Filé mignon'},
						'Coxão duro',
						'Peito'
					]
				},{
					name : 'Longissimus dossi',
					answers : [
						'Filé mignon',
						{text : 'Contra-filé'},
						'Coxão duro',
						'Peito'
					]
				}, {
					name : 'Pectoralis profunaus',
					answers : [
						'Contra-filé',
						{text : 'Peito'},
						'Filé mignon',
						'Coxão duro'
					]
				}, {
					name : 'Biceps femoris',
					answers : [
						'Contra-filé',
						{text : 'Coxão duro'},
						'Filé mignon',
						'Peito'
					]
				}
			]
		}, 4 : {
			name : 'Como fala em latim?',
			description : 'Dado um nome em português, marque sua tradução para o latim',
			questions : [{
					name : 'Contra-filé',
					answers : [
						'Psoas major',
						{text : 'Longissimus dossi'},
						'Pectoralis profunaus',
						'Biceps femoris'
					]
				},{
					name : 'Filé mignon',
					answers : [
						'Longissimus dossi',
						{text : 'Psoas major'},
						'Pectoralis profunaus',
						'Biceps femoris'
					]
				},{
					name : 'Peito',
					answers : [
						'Longissimus dossi',
						{text : 'Pectoralis profunaus'},
						'Psoas major',
						'Biceps femoris'
					]
				},{
					name : 'Coxão duro',
					answers : [
						'Longissimus dossi',
						{text : 'Biceps femoris'},
						'Psoas major',
						'Pectoralis profunaus'
					]
				}
			]
		}, 5 : {
			name : 'Qual é o corte?',
			description : 'Nunca (ou quase) mais será enganado no açougue se acertar todos!',
			questions : [{
					name : '',
					img : 'picanha.jpg',
					answers : [
						'Maminha',
						{text : 'Picanha'},
						'Coxão duro',
						'Miolo de alcatra'
					]
				}, {
					name : '',
					img : 'maminha.png',
					answers : [
						'Picanha',
						{text : 'Maminha'},
						'Coxão duro',
						'Miolo de alcatra'
					]
				},{
					name : '',
					img : 'coxaoDuro.png',
					answers : [
						'Picanha',
						{text : 'Coxão duro'},
						'Maminha',
						'Miolo de alcatra'
					]
				},{
					name : '',
					img : 'mioloalcatra.png',
					answers : [
						'Picanha',
						{text : 'Miolo de alcatra'},
						'Maminha',
						'Coxão duro'
					]
				},{
					name : '',
					img : 'contraFile.png',
					answers : [
						'Picanha',
						{text : 'Contra filé'},
						'Filé mignon',
						'Coxão duro'
					]
				},{
					name : '',
					img : 'coxaoMole.png',
					answers : [
						'Músculo',
						{text : 'Coxão mole'},
						'Patinho',
						'Coxão duro'
					]
				},{
					name : '',
					img : 'filemignon.JPG',
					answers : [
						'Contra filé',
						{text : 'Filé mignon'},
						'Músculo',
						'Largato'
					]
				},{
					name : '',
					img : 'musculo.png',
					answers : [
						'Lagarto',
						{text : 'Músculo'},
						'Patinho',
						'Coxão mole'
					]
				},{
					name : '',
					img : 'lagarto.png',
					answers : [
						'Picanha',
						{text : 'Lagarto'},
						'Músculo',
						'Filé mignon'
					]
				},{
					name : '',
					img : 'patinho.png',
					answers : [
						'Picanha',
						{text : 'Patinho'},
						'Músculo',
						'Coxão mole'
					]
				}
			]
		}, 6 : {
			name : 'Proteínas do músculo bovino',
			description : 'Consegue adivinhar cada parte da composição do músculo?',
			questions : [{
					name : 'O que é o 1?',
					img : 'miofibrilaresQ.png',
					answers : [
						'Fibra muscular',
						{text : 'Músculo'},
						'Miofibrila'
					]
				}, {
					name : 'O que é o 2?',
					img : 'miofibrilaresQ.png',
					answers : [
						'Músculo',
						{text : 'Fibra muscular'},
						'Miofibrila'
					]
				}, {
					name : 'O que é o 3?',
					img : 'miofibrilaresQ.png',
					answers : [
						'Sarcomero',
						{text : 'Sarcolema'},
						'Sarcoplasma'
					]
				}, {
					name : 'O que é o 4?',
					img : 'miofibrilaresQ.png',
					answers : [
						'Sarcomero',
						{text : 'Sarcoplasma'},
						'Sarcolema'
					]
				}, {
					name : 'O que é o 5?',
					img : 'miofibrilaresQ.png',
					answers : [
						'Sarcoplasma',
						{text : 'Sarcomero'},
						'Sarcolema'
					]
				}, {
					name : 'O que é o 6?',
					img : 'miofibrilaresQ.png',
					answers : [
						'Músculo',
						{text : 'Miofibrila'},
						'Fibra muscular'
					]
				}
			]
		}, 7 : {
			name : 'Sarcômero',
			description : 'Vamos entender mais sobre o sarcômero',
			questions : [{
					name : 'O que é o 4?',
					img : 'sarcomeroQ.png',
					answers : [
						'Actina',
						{text : 'Miosina'},
						'Troponina',
						'Tropomiosina'
					]
				}, {
					name : 'O que é o 5?',
					img : 'sarcomeroQ.png',
					answers : [
						'Miosina',
						{text : 'Actina'},
						'Troponina',
						'Tropomiosina'
					]
				}, {
					name : 'O que é o 1?',
					img : 'sarcomeroQ.png',
					answers : [
						'Banda A',
						{text : 'Banda I'},
						'Linha Z'
					]
				}, {
					name : 'O que é o 2?',
					img : 'sarcomeroQ.png',
					answers : [
						'Banda I',
						{text : 'Banda A'},
						'Linha Z'
					]
				}, {
					name : 'O que é o 3?',
					img : 'sarcomeroQ.png',
					answers : [
						'Banda I',
						{text : 'Linha Z'},
						'Banda A'
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
		}, 1000 + 1000 * correct);
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
