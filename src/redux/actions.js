// в этом файле хранятся экшн криейторы( функции хранящие экшн)

import { INCREMENT, DECREMENT, INPUT_TEXT } from "./types";

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

export function inputText (text) {
    return {
        type: INPUT_TEXT,
        text
    }
}