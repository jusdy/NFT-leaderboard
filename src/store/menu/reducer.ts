import { createReducer } from '@reduxjs/toolkit';
import { setMenuStatus } from './action'

const nameState = {
    isMenu : false
};

const menu = createReducer(nameState, (builder) => {
    builder.addCase(setMenuStatus, (state) => {
      return {
        ...state,
        isMenu: !state.isMenu
      };
    })
})

export default menu;