import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isMenuOpen: true,
    isOpen: false
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,

    reducers: {
    openMenu(state) {
        state.isOpen = true;
        state.isMenuOpen = false;
    },
    closeMenu(state) {
        state.isOpen = false;
        state.isMenuOpen = true;
    }
  }
});

export const { openMenu, closeMenu } = menuSlice.actions;

export default menuSlice.reducer;
