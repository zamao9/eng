document.addEventListener('DOMContentLoaded', () => {
	let words = [
		{
			ru: 'дело / случай',
			eng: 'case',
		},
		{
			ru: 'точка / смысл',
			eng: 'point',
		},
		{
			ru: 'смылс / чувство',
			eng: 'sense',
		},
		{
			ru: 'государство',
			eng: 'government',
		},
		{
			ru: 'способен / в состоянии',
			eng: 'able',
		},
		{
			ru: 'безупречный',
			eng: 'immaculate',
		},
		{
			ru: 'удержаться / воздержаться',
			eng: 'keep from',
		},
		{
			ru: 'развалиться на части',
			eng: 'fall apart',
		},
		{
			ru: 'швы',
			eng: 'seams',
		},
		{
			ru: 'преступление',
			eng: 'crime',
		},
		{
			ru: 'мощь / может',
			eng: 'might',
		},
		{
			ru: 'что-то undone',
			eng: 'come undone',
		},
		{
			ru: 'мурашки',
			eng: 'chills',
		},
		{
			ru: 'не',
			eng: 'are not / aint',
		},
		{
			ru: 'потерявший веру',
			eng: 'faith-departed',
		},
		{
			ru: 'толпа',
			eng: 'crowd',
		},
		{
			ru: 'кричать',
			eng: 'shout / yell',
		},
		{
			ru: 'стоять на своем',
			eng: 'stand your ground',
		},
		{
			ru: 'гнуться',
			eng: 'bend',
		},
		{
			ru: 'искать',
			eng: 'seek',
		},
		{
			ru: 'разделить',
			eng: 'devide',
		},
		{
			ru: 'вешать',
			eng: 'hang',
		},
		{
			ru: 'чайка',
			eng: 'gull / seagull',
		},
		{
			ru: 'сам по себе',
			eng: 'on my own',
		},
		{
			ru: 'жара',
			eng: 'heat',
		},
		{
			ru: 'трахея',
			eng: 'windpipe',
		},
		{
			ru: 'оскорблять / раздражать',
			eng: 'huff',
		},
		{
			ru: 'страдать',
			eng: 'suffer',
		},
		{
			ru: 'задыхаться',
			eng: 'suffocate',
		},
		{
			ru: 'тонуть',
			eng: 'drown',
		},
		{
			ru: 'я собираюсь сделать',
			eng: 'im about to',
		},
		{
			ru: 'реанимировать',
			eng: 'resuscitate',
		},
		{
			ru: 'щелчок',
			eng: 'snap',
		},
		{
			ru: 'класть',
			eng: 'lay',
		},
		{
			ru: 'унижение',
			eng: 'stoop / humiliate',
		},
		{
			ru: 'едва ли / еле еле',
			eng: 'barely',
		},
		{
			ru: 'никто / также не',
			eng: 'neither',
		},
		{
			ru: 'любой / каждый',
			eng: 'either',
		},
		{
			ru: 'устал от',
			eng: 'sick of',
		},
		{
			ru: 'блевать / изрыгать',
			eng: 'spew',
		},
		{
			ru: 'плевать',
			eng: 'spit',
		},
		{
			ru: 'тянуть',
			eng: 'pull',
		},
		{
			ru: 'отдельный',
			eng: 'separate',
		},
		{
			ru: 'сдержанный',
			eng: 'restraint',
		},
		{
			ru: 'тротуар',
			eng: 'sidewalk',
		},
		{
			ru: 'честный / искренний',
			eng: 'sincere',
		},
		{
			ru: 'раздраженный',
			eng: 'pissed',
		},
		{
			ru: 'завязывать / галстук',
			eng: 'tie',
		},
		{
			ru: 'срочно',
			eng: 'urgent',
		},
		{
			ru: 'разрешение',
			eng: 'clearance',
		},
		{
			ru: 'ушел в отставку',
			eng: 'retired',
		},
		{
			ru: 'похожий',
			eng: 'similar',
		},
		{
			ru: 'упоминать',
			eng: 'mention',
		},
		{
			ru: 'подозрения',
			eng: 'suspicions',
		},
		{
			ru: 'беспорядок',
			eng: 'mess',
		},
		{
			ru: 'крот / моль',
			eng: 'mole',
		},
		{
			ru: 'хер / ничтожество',
			eng: 'prick',
		},
		{
			ru: 'необходимый',
			eng: 'necessary',
		},
		{
			ru: 'источник',
			eng: 'sourse',
		},
		{
			ru: 'ребята',
			eng: 'chaps',
		},
		{
			ru: 'довольный',
			eng: 'pleased',
		},
		{
			ru: 'дырявый',
			eng: 'leaky',
		},
		{
			ru: 'притворяться',
			eng: 'pretend',
		},
		{
			ru: 'развлекать',
			eng: 'entertain',
		},
		{
			ru: 'заразный',
			eng: 'contagious',
		},
		{
			ru: 'напрасно',
			eng: 'vain',
		},
		{
			ru: 'пытка',
			eng: 'torture',
		},
		{
			ru: 'взор / взгляд',
			eng: 'gaze',
		},
		{
			ru: 'выше',
			eng: 'above',
		},
		{
			ru: 'страсть',
			eng: 'passion',
		},
		{
			ru: 'хватка',
			eng: 'grip',
		},
		{
			ru: 'азарт / острые ощущения',
			eng: 'thrill',
		},
		{
			ru: 'соперник / конекурент',
			eng: 'rival',
		},
		{
			ru: 'добыча',
			eng: 'prey',
		},
		{
			ru: 'жесткий',
			eng: 'tough',
		},
		{
			ru: 'стакать как в доте',
			eng: 'stack',
		},
		{
			ru: 'прямой',
			eng: 'straight',
		},
		{
			ru: 'кишки',
			eng: 'guts',
		},
		{
			ru: 'воля',
			eng: 'will',
		},
		{
			ru: 'на плаву',
			eng: 'float',
		},
		{
			ru: 'бросить вызов / игнорировать',
			eng: 'defy',
		},
		{
			ru: 'пройти / пропускать',
			eng: 'pass',
		},
		{
			ru: 'градус / степень',
			eng: 'degree',
		},
		{
			ru: 'столкнуться',
			eng: 'collide',
		},
		{
			ru: 'спутник',
			eng: 'satellite',
		},
		{
			ru: 'я веселюсь от души',
			eng: 'im having a ball',
		},
		{
			ru: 'умолять',
			eng: 'beg',
		},
		{
			ru: 'дурачиться',
			eng: 'fool around',
		},
		{
			ru: 'вместо',
			eng: 'instead',
		},
		{
			ru: 'внезапно',
			eng: 'sudden',
		},
		{
			ru: 'подлые вещи',
			eng: 'mean things',
		},
		{
			ru: 'мужество',
			eng: 'courage',
		},
		{
			ru: 'неловкий',
			eng: 'awkward',
		},
		{
			ru: 'расширять',
			eng: 'extend / expand',
		},
		{
			ru: 'заметить кого-то',
			eng: 'spot someone',
		},
		{
			ru: 'повседневный',
			eng: 'casual',
		},
		{
			ru: 'случайно',
			eng: 'casually',
		},
		{
			ru: 'решить',
			eng: 'decide / (re)solve',
		},
		{
			ru: 'переоцененный',
			eng: 'overrated',
		},
		{
			ru: 'в конечном счете',
			eng: 'eventually / end up',
		},
		{
			ru: 'в течении / во время',
			eng: 'during',
		},
		{
			ru: 'задолженность',
			eng: 'owe',
		},
		{
			ru: 'поскольку',
			eng: 'since',
		},
		{
			ru: 'еще бы',
			eng: 'you betcha',
		},
		{
			ru: 'отключение света',
			eng: 'blackout',
		},
		{
			ru: 'острый',
			eng: 'sharp',
		},
		{
			ru: 'похоронен',
			eng: 'buried',
		},
		{
			ru: 'определять',
			eng: 'define',
		},
		{
			ru: 'напомнить',
			eng: 'remind',
		},
		{
			ru: 'замечание',
			eng: 'remark',
		},
		{
			ru: 'замечательно',
			eng: 'remarkably',
		},
		{
			ru: 'инвалидность',
			eng: 'disability',
		},
		{
			ru: 'чудо',
			eng: 'wonder',
		},
		{
			ru: 'предполагать',
			eng: 'assume',
		},
		{
			ru: 'наглядно',
			eng: 'vividly',
		},
		{
			ru: 'развод',
			eng: 'divorce',
		},
		{
			ru: 'заболевание',
			eng: 'disease',
		},
		{
			ru: 'рвота',
			eng: 'vomiting',
		},
		{
			ru: 'спасение',
			eng: 'rescue',
		},
		{
			ru: 'веселый',
			eng: 'jolly',
		},
		{
			ru: 'пепел',
			eng: 'ashes',
		},
		{
			ru: 'повод',
			eng: 'occasion',
		},
		{
			ru: 'бросать в кого-то',
			eng: 'throw',
		},
		{
			ru: 'прибывать',
			eng: 'arrive',
		},
		{
			ru: 'отчаяние',
			eng: 'despair',
		},
		{
			ru: 'объявить',
			eng: 'announce',
		},
		{
			ru: 'оправдания',
			eng: 'excuse',
		},
		{
			ru: 'трепет / дрожь',
			eng: 'quiver',
		},
		{
			ru: 'существовать',
			eng: 'exist',
		},
		{
			ru: 'существо',
			eng: 'creature',
		},
		{
			ru: 'ползти',
			eng: 'crowl',
		},
		{
			ru: 'презирать',
			eng: 'despise',
		},
		{
			ru: 'парень',
			eng: 'lad',
		},
		{
			ru: 'скользить',
			eng: 'slip',
		},
		{
			ru: 'что касается чего-то',
			eng: 'as far as something',
		},
		{
			ru: 'процветать',
			eng: 'prosper',
		},
		{
			ru: 'удобный',
			eng: 'convenient',
		},
		{
			ru: 'посвятить',
			eng: 'devote / dedicate',
		},
		{
			ru: 'оказаться в',
			eng: 'wind up in',
		},
		{
			ru: 'подходит / соответсвует',
			eng: 'fits',
		},
		{
			ru: 'запрос',
			eng: 'query',
		},
		{
			ru: 'оставаться на связи',
			eng: 'keep in touch',
		},
		{
			ru: 'свободно / бегло',
			eng: 'fluent',
		},
		{
			ru: 'знакомый',
			eng: 'familiar',
		},
		{
			ru: 'возможность',
			eng: 'opportunity / posibility',
		},
		{
			ru: 'раскрывать / обнародовать',
			eng: 'expose',
		},
		{
			ru: 'проблема',
			eng: 'issue',
		},
		{
			ru: 'окаменеть',
			eng: 'petrify',
		},
		{
			ru: 'беспокоить / надоедать',
			eng: 'bother',
		},
		{
			ru: 'починить',
			eng: 'mend',
		},
		{
			ru: 'винить',
			eng: 'blame',
		},
		{
			ru: 'трость',
			eng: 'cane',
		},
		{
			ru: 'невежество',
			eng: 'ignorance',
		},
		{
			ru: 'скромный',
			eng: 'modest',
		},
		{
			ru: 'поведение',
			eng: 'behavior',
		},
		{
			ru: 'избегать',
			eng: 'avoid',
		},
		{
			ru: 'поселиться',
			eng: 'settle',
		},
		{
			ru: 'появиться',
			eng: 'to turn up',
		},
		{
			ru: 'длится',
			eng: 'lasts',
		},
		{
			ru: 'тем временем',
			eng: 'meanwhile',
		},
		{
			ru: 'связанный с чем-то',
			eng: 'bound',
		},
		{
			ru: 'сравнить',
			eng: 'compare',
		},
		{
			ru: 'сожалеть',
			eng: 'regret',
		},
		{
			ru: 'злой',
			eng: 'wicked',
		},
		{
			ru: 'не спать',
			eng: 'awake',
		},
		{
			ru: 'боль',
			eng: 'ache',
		},
		{
			ru: 'позвоночник',
			eng: 'spine',
		},
		{
			ru: 'запасное / свободное',
			eng: 'spare',
		},
		{
			ru: 'подозревать / подозреваемый',
			eng: 'suspect',
		},
		{
			ru: 'священный',
			eng: 'sacred',
		},
		{
			ru: 'результат',
			eng: 'outcome',
		},
		{
			ru: 'форма',
			eng: 'shape',
		},
		{
			ru: 'скрыть',
			eng: 'conceal',
		},
		{
			ru: 'угасание',
			eng: 'fade',
		},
		{
			ru: 'стоимость / цена',
			eng: 'coast',
		},
		{
			ru: 'проклятие',
			eng: 'curse',
		},
		{
			ru: 'не против',
			eng: 'dont mind',
		},
		{
			ru: 'требовать / утверждать',
			eng: 'clame',
		},
		{
			ru: 'спрос',
			eng: 'demand',
		},
		{
			ru: 'жестокость',
			eng: 'cruel',
		},
		{
			ru: 'капелька',
			eng: 'smidge',
		},
		{
			ru: 'расходы',
			eng: 'expenses',
		},
		{
			ru: 'погружение',
			eng: 'plunge',
		},
		{
			ru: 'голодать',
			eng: 'famish',
		},
		{
			ru: 'оболочка',
			eng: 'shell',
		},
		{
			ru: 'запретить',
			eng: 'forbid',
		},
		{
			ru: 'подчинять / покорять',
			eng: 'subdue',
		},
		{
			ru: 'позор',
			eng: 'disgrace',
		},
		{
			ru: 'лишать',
			eng: 'deprive',
		},
		{
			ru: 'борьба',
			eng: 'struggle',
		},
		{
			ru: 'обет / клятва',
			eng: 'vow',
		},
		{
			ru: 'нарекать',
			eng: 'dub',
		},
		{
			ru: 'горький / озлобленный',
			eng: 'bitter',
		},
	];

	const title = document.querySelector('.questions-title');
	const subtitle = document.querySelector('.questions-subtitle');
	const btn = document.querySelector('.questions__button');
	const counter = document.querySelector('.counter');

	const randomNumber = (min, max) => {
		return Math.floor(Math.random() * (max + 1 - min));
	};

	const clickOnBtn = () => {
		let number = randomNumber(0, words.length - 1);

		let randomElement = words[number];

		title.innerText = randomElement.ru;
		subtitle.innerText = randomElement.eng;

		words.splice(number, 1);

		if (words.length === 0) {
			btn.innerText = 'done';
			btn.classList.add('disabled');
		}

		counter.innerText = words.length;
	};

	btn.addEventListener('click', () => {
		clickOnBtn();
		subtitle.classList.add('disabled');
		subtitle.classList.remove('active');
	});
	subtitle.addEventListener('click', () => {
		subtitle.classList.add('active');
		subtitle.classList.remove('disabled');
	});
});