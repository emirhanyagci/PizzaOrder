import store from "../store/store";
import {
  openModal as openModalHandler,
  closeModal as closeModalHandler,
} from "../store/modalSlice";

export function openModal(open) {
  store.dispatch(openModalHandler(open));
}
export function closeModal() {
  store.dispatch(closeModalHandler());
}
