export default function commutesReducer(state=[], action){
  switch (action.type) {
    case 'FETCH_COMMUTES':
      return action.payload
    default:
      return state
  }
}
