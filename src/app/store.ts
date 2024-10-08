import dataSlice from '@/shared/slices/dataSlice';
import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        data: dataSlice,
    },
});

interface DataItem {
    page: number;
    years: number[];
    text: string[];
    isActive: boolean;
}

export type AppStore = typeof store;
export type AppState = {
    data: DataItem[]; // Укажите тип состояния для data
};
export type AppDispatch = AppStore['dispatch'];

// Обновите RootState для использования AppState
export type RootState = ReturnType<AppStore['getState']>;
