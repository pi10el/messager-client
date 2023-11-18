import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TTab = 'chats' | 'users';
type TChatId = null | number;

export interface AppState {
  isSidebar: boolean;
  tab: TTab;
  chatId: TChatId;
}

const initialState: AppState = {
  isSidebar: false,
  tab: 'chats',
  chatId: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebar = !state.isSidebar;
    },

    setTab: (state, { payload }: PayloadAction<TTab>) => {
      state.tab = payload;
    },

    setChatId: (state, { payload }: PayloadAction<TChatId>) => {
      state.chatId = payload;
    },
  },
});

export default appSlice;
