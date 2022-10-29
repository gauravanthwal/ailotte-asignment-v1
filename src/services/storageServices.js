export const setLocalStorage = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export const checkLocalStorage = (name) => {
  const users = JSON.parse(localStorage.getItem(name));
  if (users?.length) {
    return true;
  }
  return false;
};

export const getFromLocalStorage = (name) => {
  return JSON.parse(localStorage.getItem(name));
};
