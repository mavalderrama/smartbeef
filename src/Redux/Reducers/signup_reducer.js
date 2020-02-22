let initial_state = {
  stepper_actual_state: 0
};

export default function(state = initial_state, action) {
  console.log(action);
  const { type, payload } = action;

  if (type === "NEXT_STEPPER") {
    return {
      ...state,
      stepper_actual_state: state["stepper_actual_state"] + 1
    };
  }
  return state;
}
