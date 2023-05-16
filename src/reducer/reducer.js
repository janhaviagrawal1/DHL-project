const reducer = (payload = [], action) => {
  if (action.type === "list") {
    return { payload: action.payload };
  } else return null;
};

export default reducer;
