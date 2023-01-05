// в этом файле хранятся экшн криейторы( функции хранящие экшн)

import { INCREMENT, DECREMENT } from "./types";

// функция возвращает обьект с типом экшена
export function incrementLikes () {
    return {
        type: INCREMENT
    }
}

// функция возвращает обьект с типом экшена
export function decrementLikes () {
    return {
        type: DECREMENT
    }
}