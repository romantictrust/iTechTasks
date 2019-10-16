export const FETCH_CHANGE_MATERIAL_DATA = 'FETCH_CHANGE_MATERIAL_DATA';

export const setMaterialData = (data) => ({
  type: FETCH_CHANGE_MATERIAL_DATA,
  payload: data,
});

export const STORAGE_CHANGE_USER_DATA = 'STORAGE_CHANGE_USER_DATA';

export const setUsersData = (user) => ({
  type: STORAGE_CHANGE_USER_DATA,
  payload: user,
});

export const STORAGE_CLEAR = 'STORAGE_CLEAR';

export const clearStorage = () => ({
  type: STORAGE_CLEAR,
});