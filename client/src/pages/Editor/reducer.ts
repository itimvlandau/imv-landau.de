export const initialState = {
  fetching: false,
};

export default function reducer(
  state = initialState,
  action: { type: string }
) {
  switch (action.type) {
    //   case "FETCH_CONTENT":
    //     return {
    //       ...state,
    //       fetching: true,
    //     };

    default:
      return state;
  }
}
