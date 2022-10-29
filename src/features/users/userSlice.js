import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadUsers } from "../../services/usersData";
import {
  setLocalStorage,
  checkLocalStorage,
  getFromLocalStorage,
} from "../../services/storageServices";

// Fetch Users
export const fetchUsers = createAsyncThunk("users/fetchUsers", () =>
  loadUsers()
);

const initialState = {
  categories: {
    productManager: {
      users: [],
    },
    frontendDev: {
      users: [],
    },
    backendDev: {
      users: [],
    },
    uxDev: {
      users: [],
    },
    qaTester: {
      users: [],
    },
    mobileDev: {
      users: [],
    },
    devOps: {
      users: [],
    },
  },
  selectedTeam: {
    productManager: {
      users: checkLocalStorage("selectedPM")
        ? getFromLocalStorage("selectedPM")
        : []
    },
    frontendDev: {
      users: checkLocalStorage("selectedFD")
        ? getFromLocalStorage("selectedFD")
        : []
    },
    backendDev: {
      users: checkLocalStorage("selectedBD")
        ? getFromLocalStorage("selectedBD")
        : []
    },
    uxDev: {
      users: checkLocalStorage("selectedUX")
        ? getFromLocalStorage("selectedUX")
        : []
    },
    qaTester: {
      users: checkLocalStorage("selectedQA")
        ? getFromLocalStorage("selectedQA")
        : []
    },
    mobileDev: {
      users: checkLocalStorage("selectedMD")
        ? getFromLocalStorage("selectedMD")
        : []
    },
    devOps: {
      users: checkLocalStorage("selectedDOP")
        ? getFromLocalStorage("selectedDOP")
        : []
    },
  },
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setProductManager: (state, { payload }) => {
      if (payload.remove) {
        state.selectedTeam.productManager.users =
          state.selectedTeam.productManager.users.filter(
            (item) =>
              item.name.first + item.name.last !==
              payload.user.name.first + payload.user.name.last
          );
      } else {
        state.selectedTeam.productManager.users = [
          ...state.selectedTeam.productManager.users,
          payload,
        ];
      }
      setLocalStorage("selectedPM", state.selectedTeam.productManager.users);
    },
    setFrontendDev: (state, { payload }) => {
      if (payload.remove) {
        state.selectedTeam.frontendDev.users =
          state.selectedTeam.frontendDev.users.filter(
            (item) =>
              item.name.first + item.name.last !==
              payload.user.name.first + payload.user.name.last
          );
      } else {
        state.selectedTeam.frontendDev.users = [
          ...state.selectedTeam.frontendDev.users,
          payload,
        ];
      }
      setLocalStorage("selectedFD", state.selectedTeam.frontendDev.users);
    },
    setBackendDev: (state, { payload }) => {
      if (payload.remove) {
        state.selectedTeam.backendDev.users =
          state.selectedTeam.backendDev.users.filter(
            (item) =>
              item.name.first + item.name.last !==
              payload.user.name.first + payload.user.name.last
          );
      } else {
        state.selectedTeam.backendDev.users = [
          ...state.selectedTeam.backendDev.users,
          payload,
        ];
      }
      setLocalStorage("selectedBD", state.selectedTeam.backendDev.users);
    },
    setQaDev: (state, { payload }) => {
      if (payload.remove) {
        state.selectedTeam.qaTester.users =
          state.selectedTeam.qaTester.users.filter(
            (item) =>
              item.name.first + item.name.last !==
              payload.user.name.first + payload.user.name.last
          );
      } else {
        state.selectedTeam.qaTester.users = [
          ...state.selectedTeam.qaTester.users,
          payload,
        ];
      }
      setLocalStorage("selectedQA", state.selectedTeam.qaTester.users);
    },
    setDevOps: (state, { payload }) => {
      if (payload.remove) {
        state.selectedTeam.devOps.users =
          state.selectedTeam.devOps.users.filter(
            (item) =>
              item.name.first + item.name.last !==
              payload.user.name.first + payload.user.name.last
          );
      } else {
        state.selectedTeam.devOps.users = [
          ...state.selectedTeam.devOps.users,
          payload,
        ];
      }
      setLocalStorage("selectedDOP", state.selectedTeam.devOps.users);
    },
    setUxDev: (state, { payload }) => {
      if (payload.remove) {
        state.selectedTeam.uxDev.users = state.selectedTeam.uxDev.users.filter(
          (item) =>
            item.name.first + item.name.last !==
            payload.user.name.first + payload.user.name.last
        );
      } else {
        state.selectedTeam.uxDev.users = [
          ...state.selectedTeam.uxDev.users,
          payload,
        ];
      }
      setLocalStorage("selectedUX", state.selectedTeam.uxDev.users);
    },
    setMobileDev: (state, { payload }) => {
      if (payload.remove) {
        state.selectedTeam.mobileDev.users =
          state.selectedTeam.mobileDev.users.filter(
            (item) =>
              item.name.first + item.name.last !==
              payload.user.name.first + payload.user.name.last
          );
      } else {
        state.selectedTeam.mobileDev.users = [
          ...state.selectedTeam.mobileDev.users,
          payload,
        ];
      }
      setLocalStorage("selectedMD", state.selectedTeam.mobileDev.users);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.categories.productManager.users = action.payload;
      state.categories.frontendDev.users = action.payload;
      state.categories.uxDev.users = action.payload;
      state.categories.backendDev.users = action.payload;
      state.categories.devOps.users = action.payload;
      state.categories.mobileDev.users = action.payload;
      state.categories.qaTester.users = action.payload;
    });
  },
});

export const {
  setBackendDev,
  setFrontendDev,
  setDevOps,
  setMobileDev,
  setProductManager,
  setQaDev,
  setUxDev,
} = userSlice.actions;
export default userSlice.reducer;
