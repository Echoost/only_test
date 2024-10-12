import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface DataItem {
    page: number;
    info: Info[];
    years: number[];
    text: string[];
    isActive: boolean;
}

export interface Info {
    year: number;
    text: string;
    id: string;
}

export interface RootState {
    data: DataItem[];
}

const initialState = [
    {
        page: 1,
        title: 'Технологии',
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
        id: crypto.randomUUID(),
    },
    {
        page: 2,
        title: 'Кино',
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
        id: crypto.randomUUID(),
    },
    {
        page: 3,
        title: 'Литература',
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
        id: crypto.randomUUID(),
    },
    {
        page: 4,
        title: 'Театр',
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
        id: crypto.randomUUID(),
    },
    {
        page: 5,
        title: 'Спорт',
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
        id: crypto.randomUUID(),
        isActive: false,
    },
    {
        page: 6,
        title: 'Новости',
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
        id: crypto.randomUUID(),
        isActive: true,
    },
];

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            return state.map(element => ({
                ...element,
                isActive: element.page === action.payload,
            }));
        },
        updateLocation: (state, action: PayloadAction<number>) => {
            const selectedIndex = action.payload;
            const dotCount = state.length;

            // Создаем новый массив с измененными местоположениями точек
            const updatedState = state.map((element, i) => ({
                ...element,
                page: state[(i + selectedIndex) % dotCount].page,
            }));

            // Возвращаем обновленное состояние
            return updatedState;
        },
    },
});

export const { setPage, updateLocation } = dataSlice.actions;
export default dataSlice.reducer;
