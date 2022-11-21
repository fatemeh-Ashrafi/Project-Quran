import { createSlice } from "@reduxjs/toolkit";

 export const qaries =["minshawi","husary"]
export const SoundSlice = createSlice({
    name: "sound",
    initialState: { qari : localStorage.getItem("qari") || "minshawi"},
    reducers: {
        changeQari: (state, action) => {
            if (qaries.includes(action.payload)) {
              state.qari =action.payload ;
              localStorage.setItem("qari",action.payload)
            }
        }
    },
});
export const {changeQari} = SoundSlice.actions;
export default SoundSlice.reducer;
