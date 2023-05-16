const reducer = (payload = [], action) => {
  if (action.type === "list") {
    return { payload: action.payload };
  } else return payload;
};

export default reducer;
