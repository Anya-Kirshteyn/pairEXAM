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


let container=document.getElementById('container')
let addDiv=document.getElementById('addDiv')
let input=document.getElementById('name-value')
let bthAdd=document.getElementById('btn-add')
let errorDiv=document.getElementById('error')
let bthSortByName=document.getElementById('byName')
let bthSortByValue= document.getElementById('byValue')
let bthDelete=document.getElementById('deleteBtn')
let =document.getElementById('')
let =document.getElementById('')
let =document.getElementById('')
