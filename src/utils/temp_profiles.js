let data_profiles = [];

for (let i = 0; i < 50; i++) {
    data_profiles[i] = {
        id: i,
        date: new Date().toLocaleDateString('ru-RU'),
        status_profile: `${Math.random() * 10 <= 5 ? 'Уточняется' : 'Активный'}`,
        fio: `${i % 2 === 0 ? 'Петров Петр Петрович' : 'Иванов Иван Иванович'}`,
        telegram: `${i % 2 === 0 ? 'petro' : 'vano'}`,
        gender: `${i % 2 === 0 ? 'М' : 'Ж'}`,
        programm: `${i % 2 === 0 ? 'Аналитик даных' : 'Системный аналитик'}`,
        promocode: `${Math.random() * 10 <= 5 ? 'vladimir' : 'poman'}`,
        onbordig: Math.random() * 10 <= 5 ? true : false,
        gaid: Math.random() * 10 <= 5 ? true : false,
        task: Math.random() * 10 <= 5 ? '56' : '89',
        status_task: `${Math.random() * 10 <= 5 ? 'Выполнена' : 'В работе'}`,
    };
}

export default data_profiles;