let data_contents = [];

for (let i = 0; i < 100; i++) {
    data_contents[i] = {
        id: i,
        date: new Date().toLocaleDateString('ru-RU'),
        fio: `${i % 2 === 0 ? 'Петров Петр Петрович' : 'Иванов Иван Иванович'}`,
        telegram: `${i % 2 === 0 ? 'petro' : 'vano'}`,
        status_profile: `${Math.random() * 10 <= 5 ? 'Уточняется' : 'Активный'}`,
        gaid: Math.random() * 10 <= 5 ? true : false,
        tasks: Math.random() * 10 <= 5 ? true : false,
        platform: `${Math.random() * 10 <= 5 ? 'Habr' : 'YouTube'}`,
        content: `https://content.ru/${Math.random() * 10 <= 5 ? 'Habr' : 'YouTube'}`,
        file: 'https://file.ru/',
        send_merch: '',
        number_form: Math.random() * 10 <= 5 ? '12' : '28',
        number_task: Math.random() * 10 <= 5 ? '56' : '89'
    };
}

export default data_contents;