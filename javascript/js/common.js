// var name = 'Всилий';
// var admin = name;
// alert (admin);

// var admin = confirm('вы администратор?');
// console.log(admin)
// alert(admin);

// var name = prompt('Введите своё имя', '');
// alert('Вас зовут ' + name);

// Пользуясь рядом инструментов мы убираем рутинную работу и ускоряем технологический процесс. Gulp в качестве сборщика проэктов JADE и STYLUS в качестве HTML и CSS препроцессоров.
// Пользуясь следующими инструментами мы убираем рутинную работу и ускоряем технологический процесс. В качестве сборщика проэктов используем Gulp, а также CSS препроцессор STYLUS и HTML препроцессор JADE

// На большинство проектов применяется методология БЭМ, благодаря чему мы получаем сайт который можно поддерживать — долгие годы.
// Применяя БЭМ методологию мы получаем сайт кторы можно поддерживать — долгие годы.

/*if*/
// var name = "EcmaScript";

// var  java = prompt('Каково «официальное» название JavaScript?', '') 
// 	if (java == name) { 
// 		alert ("вы молодец!")
// 	} else {
// 		alert("да как такого не знать!")
// 	}

// var n = prompt('введите число для сравнения', '')
//  if (n > 0){
//  	alert("1")
//  } else if (n = 0){
// 	alert("0")
//  } else {
//  	alert("-1")
//  }

var userName = "admin";
	password = "qwer";

var inputName = prompt('Вы кто?', '');
if (inputName == userName){
	var pass = prompt('введите пароль', '');
		 if (pass === password){
			alert("Добро пожаловать!")
		} else if (pass == 0){
			alert("вход отменен")
		} else {
			alert("введите правильно имя")
		}
} else if (userName == null) {
	alert("Вход отменен")
} else {

  alert( 'Я вас не знаю' );

};

// var userName = prompt('Кто пришёл?', '');

// if (userName == 'Админ') {

//   var pass = prompt('Пароль?', '');

//   if (pass == 'Чёрный Властелин') {
//     alert( 'Добро пожаловать!' );
//   } else if (pass == null) { // (*)
//     alert( 'Вход отменён' );
//   } else {
//     alert( 'Пароль неверен' );
//   }

// } else if (userName == null) { // (**)
//   alert( 'Вход отменён' );

// } else {

//   alert( 'Я вас не знаю' );

// }