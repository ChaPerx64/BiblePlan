const rst_contains = [{"title": "Бытие", "chapters": 50}, {"title": "Исход", "chapters": 40}, {"title": "Левит", "chapters": 27}, {"title": "Числа", "chapters": 36}, {"title": "Второзаконие", "chapters": 34}, {"title": "Иисус Навин", "chapters": 24}, {"title": "Судьи", "chapters": 21}, {"title": "Руфь", "chapters": 4}, {"title": "1-я Царств", "chapters": 31}, {"title": "2-я Царств", "chapters": 24}, {"title": "3-я Царств", "chapters": 22}, {"title": "4-я Царств", "chapters": 25}, {"title": "1-я Паралипоменон", "chapters": 29}, {"title": "2-я Паралипоменон", "chapters": 36}, {"title": "Ездра", "chapters": 10}, {"title": "Неемия", "chapters": 13}, {"title": "Есфирь", "chapters": 10}, {"title": "Иов", "chapters": 42}, {"title": "Псалом", "chapters": 150}, {"title": "Притчи", "chapters": 31}, {"title": "Екклесиаст", "chapters": 12}, {"title": "Песня Песней", "chapters": 8}, {"title": "Исаия", "chapters": 66}, {"title": "Иеремия", "chapters": 52}, {"title": "Плач Иеремии", "chapters": 5}, {"title": "Иезекииль", "chapters": 48}, {"title": "Даниил", "chapters": 12}, {"title": "Осия", "chapters": 14}, {"title": "Иоиль", "chapters": 3}, {"title": "Амос", "chapters": 9}, {"title": "Авдий", "chapters": 1}, {"title": "Иона", "chapters": 4}, {"title": "Михей", "chapters": 7}, {"title": "Наум", "chapters": 3}, {"title": "Аввакум", "chapters": 3}, {"title": "Софония", "chapters": 3}, {"title": "Аггей", "chapters": 2}, {"title": "Захария", "chapters": 14}, {"title": "Малахия", "chapters": 4}, {"title": "Матфея", "chapters": 28}, {"title": "Марка", "chapters": 16}, {"title": "Луки", "chapters": 24}, {"title": "Иоанна", "chapters": 21}, {"title": "Деяния", "chapters": 28}, {"title": "Иакова", "chapters": 5}, {"title": "1-е Петра", "chapters": 5}, {"title": "2-е Петра", "chapters": 3}, {"title": "1-е Иоанна", "chapters": 5}, {"title": "2-е Иоанна", "chapters": 1}, {"title": "3 Иоанна", "chapters": 1}, {"title": "Иуды", "chapters": 1}, {"title": "К Римлянам", "chapters": 16}, {"title": "1-е Коринфянам", "chapters": 16}, {"title": "2-е Коринфянам", "chapters": 13}, {"title": "К Галатам", "chapters": 6}, {"title": "К Ефесянам", "chapters": 6}, {"title": "К Филиппийцам", "chapters": 4}, {"title": "К Колоссянам", "chapters": 4}, {"title": "1-е Фессалоникийцам", "chapters": 5}, {"title": "2-е Фессалоникийцам", "chapters": 3}, {"title": "1-е Тимофею", "chapters": 6}, {"title": "2-е Тимофею", "chapters": 4}, {"title": "К Титу", "chapters": 3}, {"title": "К Филимону", "chapters": 1}, {"title": "К Евреям", "chapters": 13}, {"title": "Откровение", "chapters": 22}]


const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);


function oneYearChrono (t_date, bible) {
    let chapters_remain = dayOfYear(t_date)*1189/365;
    for (let book of bible) {
        if (chapters_remain <= book.chapters) {
            return `${book.title}, глава ${Math.floor(chapters_remain)}`
        }
        chapters_remain -= book.chapters
    }
}


function plan (planName) {
    asdfghjk
    if (planName === '1yChrono') {
        return planName
    }
}

const out_str = document.querySelector('.out_string')
const btn = document.querySelector('.btn');
btn.addEventListener('click', e => {
    out_str.innerHTML = oneYearChrono(new Date, rst_contains);
  });
