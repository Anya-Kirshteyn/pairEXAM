// Задание: Создание приложения для управления парами "Имя/Значение"
// Цель:
//     Разработать HTML/JavaScript приложение для управления списком пар "Имя/Значение" со следующими функциями:
//     Поле ввода:
//     Текстовое поле для ввода пар в формате: <имя> = <значение>.
//     Проверка: корректный синтаксис (только буквы и цифры в имени/значении, пробелы вокруг = игнорируются). Некорректные записи не добавляются.
//     Отображение списка:
//     Вывод добавленных пар в списке ниже поля ввода.
//     Пример:
//     Hello = World
//     Happy = Coding
//     Функционал:
//     Добавить: Вставка проверенных пар в список.
//     Сортировать по Имени: Сортировка списка по имени (по возрастанию).
//     Сортировать по Значению: Сортировка списка по значению (по возрастанию).
//     Удалить: Удаление выбранных элементов из списка.
//     Адаптивный дизайн:
//     Интерфейс должен адаптироваться под разные устройства (мобильные, планшеты, десктопы).
//     Улучшения:
//     Добавьте улучшения для удобства (очистка поля после добавления, сообщения об ошибках).
//     Код должен быть чистым, организованным и с комментариями.
// ===============удалить=================
    // Task: Create a Name/Value Pair Management Application
    // A textbox for users to enter name/value pairs in the format: <name> = <value>.
    // Validation: Ensure the input follows the correct syntax (alphanumeric characters only for names/values, with optional spaces around the = sign).
    // Invalid entries must not be added.
    // List Display:
    // Display added name/value pairs in a list below the input field.
    // Example entries:
    // Copy
    // Hello = World
    // Happy = Coding
    // Functionality:
    // Add: Insert validated pairs into the list.
    // Sort by Name: Sort the list alphabetically by name (ascending).
    // Sort by Value: Sort the list alphabetically by value (ascending).
    // Delete: Remove selected items from the list.
    // Responsive Design:
    // The UI must adapt to different screen sizes (mobile, tablet, desktop).
    // Enhancements:
    // Add any improvements to enhance usability (e.g., clear input after adding, error messages for invalid entries).
    // Keep the code clean, organized, and well-commented.

// Что нужно сделать:
//
//    --- Получать введенную строку из input
//
// ------Проверять валидность формата
//
// ------Добавлять в список подходящие пары

addEventListener("DOMContentLoaded", (event) => {
    let container = document.getElementById('container')
    let addDiv = document.getElementById('addDiv')
    let input = document.getElementById('name-value')
    let bthAdd = document.getElementById('btn-add')
    let errorDiv = document.getElementById('error')
    let bthSortByName = document.getElementById('byName')
    let bthSortByValue = document.getElementById('byValue')
    let bthDelete = document.getElementById('deleteBtn')
    let divPairList = document.getElementById('pairList')

// =======------Проверка на валидность формата================--------

bthAdd.addEventListener("click", function (){
    const inputValue=input.value.trim()

    function isPairValid(str){
        let regex=/^\s*[a-zA-Z0-9]+\s*=\s*[a-zA-Z0-9]+\s*$/;
        return regex.test(str);
    }

    if (!inputValue){
       errorDiv.textContent='The field cannot be empty!';
       return  ;
   }
   if(!isPairValid(inputValue)){
       errorDiv.textContent='Incorrect format! Use "Name=Value" (letters and numbers only)';
       return;
   }
// =================чистка+заполнение================
   errorDiv.textContent='';

   // addPairToList(inputValue)  сделать потом

    input.value=''

      })

});

// ========================addPairToList======================
let pairs=[]
addPairToList=(strPair)=>{
    let pairsArray=strPair.split('=')
    let trimArray=pairsArray.map(item=>item.trim())
const [name, value]=trimArray
    pairs.push(trimArray)
}