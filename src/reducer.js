export const initialState = {
  user: null,
  //just for debuging
//   token:
//     "BQBeD0OouAqs-zlq4d9K9OdUbfmalO6lKjleYzKBvFFRDEZ9E9NWs7fdEtFe7zISAwFw9DohNwap1-vG3s--Fvi94qaZEog6tAlGh3YCxhjkIXhK-5w5rywJYDrxCH6ZPz2N3n0TNhe_ndY8Set271KtoqjbFLzRGVdYhg8ADXAbyOxK",
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

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
