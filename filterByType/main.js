function filterByType(type, ...arr){
	/*Сортировка данных*/
    return arr.filter(e => typeof e === type)
}

/*Пользователь может выбрать тип данных*/
let inputType = prompt('Введите тип для сортировки')

/*Вызов функции с уже введенными данными */
let obj = filterByType (inputType,55,220,'simple string',false,'small String',true,false);
alert(JSON.stringify(obj));








