import { createSlice } from "@reduxjs/toolkit";
import Vazir from "../../../font/Vazir.ttf";
const initialState = {
    font: 24,
    fontTranslate: 24,
    fontFamily: Vazir,
};
export const FontSizeSlice = createSlice({
    name: "fontSize",
    initialState: { value: initialState },
    reducers: {
        addText: (state) => {
            state.value.font += 2;
        },
        removeText: (state) => {
            state.value.font -= 2;
        },
        addtranslate: (state) => {
            state.value.fontTranslate += 2;
        },
        removetranslate: (state) => {
            state.value.fontTranslate -= 2;
        },
        changeFont: (state, action) => {
            console.log(action.payload);
            state.value.fontFamily =
                action.payload === "vazir" ? "Vazir" : "Yekan";
        },
    },
});
export const {
    addText,
    removeText,
    addtranslate,
    removetranslate,
    changeFont,
} = FontSizeSlice.actions;
export default FontSizeSlice.reducer;
