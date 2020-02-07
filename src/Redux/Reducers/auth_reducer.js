let initial_state = {
  is_authenticated: false,
  is_loading: false,
  user: ""
};

export default function(state = initial_state, action) {
  console.log(action);
  const { type, payload } = action;
  if (type === "LOGIN") {
    return {
      ...state,
      is_loading: false,
      is_authenticated: true
    };
  }
  if (type === "IS_ACTIVE") {
    const { id, user } = payload;
    console.log("is active", payload);
    if (id && user) {
      return {
        ...state,
        is_loading: false,
        is_authenticated: true,
        user: user,
        id: id
      };
    } else {
      return {
        ...state,
        is_loading: false,
        is_authenticated: false
      };
    }
  }
  return state;
}
