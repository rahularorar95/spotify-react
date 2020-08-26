export const initialState = {
  user: null,
  // just for debuging
  token:
    "BQAICeC2xgI1z0NpCN9LWKJRHk1hiQ_JlUtXHzdTzjEM26E_mHSTFqIQ5TqAcZdd5Hwu_1RielZ8JZMm6yz_-bnmVZeYooG3sUkxb0xj9Cmd09DOQx5ev0zPeJrLrmKncDvWuLLXUuViM1pUANT9qPgQI1xBTL_Aik-hq4tP2cClvTUe",
  playlist: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
