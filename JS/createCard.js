const cardsOfIphone = document.querySelector('.category__iphone');
const cardsOfHeadphones = document.querySelector('.category__headphones')
const cardsOfLaptop = document.querySelector('.category__laptop')

const getDayInfo = (dateString) =>  {
    const [day, month, year] = dateString.split('.');
    const date = new Date(year, month - 1, day);
  
    // Получение полного названия дня недели
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const dayOfWeek = daysOfWeek[date.getDay()];
  
    // Получение номера недели в месяце
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const pastDaysOfMonth = Math.floor((date - firstDayOfMonth) / (24 * 60 * 60 * 1000)) + 1;
    const weekNumber = Math.ceil(pastDaysOfMonth / 7);
  
    // Получение названия месяца
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const monthName = months[month - 1];
  
    // Формирование результата
    const formattedDate = `${dayOfWeek}, ${weekNumber} неделя ${monthName} ${year} года`;
    return formattedDate;
};

const generateCards = (data, categoryCard) => {
    data.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card', 'card__iphone');

        const img = document.createElement('img')
        img.src = product.imageSrc;
        img.alt = product.title;
        img.classList.add('card__image');
        card.appendChild(img)

        const date = document.createElement('p')
        date.classList.add('card__data');
        console.log(getDayInfo(product.date))
        date.textContent = `Добавлено: ${getDayInfo(product.date)}`;
        card.appendChild(date)

        const title = document.createElement('h3');
        title.classList.add('card__title');
        title.textContent = product.title;
        card.appendChild(title)

        const button = document.createElement('button');
        button.classList.add('product-card__buy-button');
        button.textContent = 'Купить';
        card.appendChild(button);

        categoryCard.appendChild(card);
    });
}


function main() {
    generateCards(dataOfIphone, cardsOfIphone);
    generateCards(dataOfHeadphones, cardsOfHeadphones);
    generateCards(dataOfLaptop, cardsOfLaptop);
}

main();