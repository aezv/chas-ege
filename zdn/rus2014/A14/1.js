(function(){'use strict';

window.vopr.txt='В каком ряду во всех словах пропущена безударная проверяемая гласная корня?'+
	'<br/>';

var ver=[//Список (на самом деле массив) слов, в которых
		//пропущена безударная проверяемая гласная корня
	'поздр..вление',
	'ц..рковный',
	'расцв..тать',
	'п..лноценный',
	'зас..лить',
	'ум..лять (значение)',
];//Лучше их располагать по алфавиту

var nev=[//Список (на самом деле массив) слов, в которых
		//пропущена какая-нибудь другая гласная
	'к..рректный',
	'выт..рать',
	'выб..рать',
	'прот..рать',
];//Внимание: после последнего элемента тоже ставится запятая. Её можно и не ставить, но так удобнее.

window.vopr.ver=[ver.iz(3).join(', ')];
for(var i=0;i<3;i++)
	window.vopr.nev[i]=nev.concat(ver.iz(2)).iz(3).join(', ');

AtoB();
})();


