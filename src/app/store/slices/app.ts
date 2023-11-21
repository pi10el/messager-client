import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TTab = 'chats' | 'users';
type TChatId = null | number;
type TForm = 'login' | 'signin';

export interface AppState {
  isSidebar: boolean;
  selectedForm: TForm;
  tab: TTab;
  chatId: TChatId;
}

const initialState: AppState = {
  isSidebar: false,
  selectedForm: 'login',
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

    setSelectForm: (state, { payload }: PayloadAction<TForm>) => {
      state.selectedForm = payload;
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
