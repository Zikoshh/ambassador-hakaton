export default function filterArray(array, value) {
    const search = function (el) {
        //проверяем наличие ключей
        if (el.date && el.fio && el.telegram) {
            const elDate = el.date.toLowerCase();
            const elFio = el.fio.toLowerCase();
            const elTelegram = el.telegram.toLowerCase();

            const searchMovie =
                elDate.includes(value.toLowerCase()) || elFio.includes(value.toLowerCase()) || elTelegram.includes(value.toLowerCase());
            return searchMovie;
        }
    };
    return array.filter((el) => search(el));
}
