import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface ModalState {
  readonly isModalOpen: boolean;
  readonly modalData: string;
}

export const initialState: ModalState = {
  isModalOpen: false,
  modalData: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsModalOpen: (state, { payload }: { payload: boolean }) => {
      state.isModalOpen = payload;
    },
    setModalContent: (state, { payload }: { payload: string }) => {
      state.modalData = payload;
    },
  },
});

const { actions, reducer } = modalSlice;
export const { setIsModalOpen, setModalContent } = actions;
export const modalSelector = (state: RootState) => state.modal;
export default reducer;
