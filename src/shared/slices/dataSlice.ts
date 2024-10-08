import { createSlice } from '@reduxjs/toolkit';

// types.ts
export interface DataItem {
    page: number;
    years: number[];
    text: string[];
    isActive: boolean;
}

export interface RootState {
    data: DataItem[];
}

const initialState = [
    {
        page: 1,
        info: [
            {
                year: 1980,
                text: 'Sinclair Research выпускает домашний компьютер ZX80',
                id: crypto.randomUUID(),
            },
            {
                year: 1982,
                text: 'Появился домашний компьютер ZX S, выпущенный брендом компаний Sinclair Research.',
                id: crypto.randomUUID(),
            },
            {
                year: 1980,
                text: 'Sinclair Research выпускает домашний компьютер ZX80',
                id: crypto.randomUUID(),
            },
            {
                year: 1982,
                text: 'Появился домашний компьютер ZX S, выпущенный брендом компаний Sinclair Research.',
                id: crypto.randomUUID(),
            },
        ],
        isActive: false,
    },
    {
        page: 2,
        info: [
            {
                year: 1987,
                text: '«Хищник»/Predator, США (реж. Джон Мактирнан)',
                id: crypto.randomUUID(),
            },
            {
                year: 1988,
                text: '«Кто подставил кролика Роджера»/Who Framed Roger Rabbit, США (реж. Роберт Земекис)',
                id: crypto.randomUUID(),
            },
            {
                year: 1989,
                text: '«Назад в будущее 2»/Back To The Future 2, США (реж. Роберт Земекис)',
                id: crypto.randomUUID(),
            },
            {
                year: 1987,
                text: '«Хищник»/Predator, США (реж. Джон Мактирнан)',
                id: crypto.randomUUID(),
            },
            {
                year: 1988,
                text: '«Кто подставил кролика Роджера»/Who Framed Roger Rabbit, США (реж. Роберт Земекис)',
                id: crypto.randomUUID(),
            },
            {
                year: 1989,
                text: '«Назад в будущее 2»/Back To The Future 2, США (реж. Роберт Земекис)',
                id: crypto.randomUUID(),
            },
        ],
        isActive: false,
    },
    {
        page: 3,
        info: [
            {
                year: 1992,
                text: 'Нобелевская премия по литературе — Дерек Уолкот, «За блестящий образец карибского эпоса в 64 разделах».',
                id: crypto.randomUUID(),
            },
            {
                year: 1994,
                text: '«Бессонница» — роман Стивена Кинга.',
                id: crypto.randomUUID(),
            },
            {
                year: 1995,
                text: 'Нобелевская премия по литературе — Шеймас Хини.',
                id: crypto.randomUUID(),
            },
            {
                year: 1992,
                text: 'Нобелевская премия по литературе — Дерек Уолкот, «За блестящий образец карибского эпоса в 64 разделах».',
                id: crypto.randomUUID(),
            },
            {
                year: 1994,
                text: '«Бессонница» — роман Стивена Кинга.',
                id: crypto.randomUUID(),
            },
            {
                year: 1995,
                text: 'Нобелевская премия по литературе — Шеймас Хини.',
                id: crypto.randomUUID(),
            },
        ],
        isActive: false,
    },
    {
        page: 4,
        info: [
            {
                year: 1999,
                text: 'Премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона',
                id: crypto.randomUUID(),
            },
            {
                year: 2000,
                text: 'Возобновлено издание журнала «Театр».',
                id: crypto.randomUUID(),
            },
            {
                year: 2002,
                text: 'Премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон',
                id: crypto.randomUUID(),
            },
            {
                year: 1999,
                text: 'Премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона',
                id: crypto.randomUUID(),
            },
            {
                year: 2000,
                text: 'Возобновлено издание журнала «Театр».',
                id: crypto.randomUUID(),
            },
            {
                year: 2002,
                text: 'Премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон',
                id: crypto.randomUUID(),
            },
        ],
        isActive: false,
    },
    {
        page: 5,
        info: [
            {
                year: 2006,
                text: 'Баскетбольный клуб ЦСКА стал победителем национального первенства России.',
                id: crypto.randomUUID(),
            },
            {
                year: 2008,
                text: 'С 8 по 24 августа в Пекине прошли летние игры.',
                id: crypto.randomUUID(),
            },
            {
                year: 2010,
                text: '13—28 февраля в Ванкувере: Зимние Олимпийские игры 2010 года.',
                id: crypto.randomUUID(),
            },
            {
                year: 2012,
                text: '2 августа - Летние Олимпийские игры.',
                id: crypto.randomUUID(),
            },
            {
                year: 2006,
                text: 'Баскетбольный клуб ЦСКА стал победителем национального первенства России.',
                id: crypto.randomUUID(),
            },
            {
                year: 2008,
                text: 'С 8 по 24 августа в Пекине прошли летние игры.',
                id: crypto.randomUUID(),
            },
            {
                year: 2010,
                text: '13—28 февраля в Ванкувере: Зимние Олимпийские игры 2010 года.',
                id: crypto.randomUUID(),
            },
            {
                year: 2012,
                text: '2 августа - Летние Олимпийские игры.',
                id: crypto.randomUUID(),
            },
        ],
        isActive: false,
    },
    {
        page: 6,
        info: [
            {
                year: 2015,
                text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
                id: crypto.randomUUID(),
            },
            {
                year: 2016,
                text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
                id: crypto.randomUUID(),
            },
            {
                year: 2017,
                text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
                id: crypto.randomUUID(),
            },
            {
                year: 2015,
                text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
                id: crypto.randomUUID(),
            },
            {
                year: 2016,
                text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
                id: crypto.randomUUID(),
            },
            {
                year: 2017,
                text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
                id: crypto.randomUUID(),
            },
        ],
        isActive: true,
    },
];

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
});

export default dataSlice.reducer;
