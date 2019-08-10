import { combineReducers } from "redux";

const initialState = {
  playing: false,
  duration:0,
  position:0,
  tracks: [],
  message: null,
  nowPlayIndex: 0
};

export default function player(state = initialState , action = {}){
  switch( action.type ){
    case 'PLAY_MUSIC':
      return Object.assign({}, state, {
        playing: true
      })

    case 'PAUSE_MUSIC':
      return Object.assign({}, state, {
        playing: false
      })

    case 'NEXT_MUSIC':
      return Object.assign({}, state, {
        playing: true,
        nowPlayIndex:state.tracks.length-2 < state.nowPlayIndex ? state.nowPlayIndex : state.nowPlayIndex + 1
      })

    case 'PREV_MUSIC':
      return Object.assign({}, state, {
        duration:0,
        position:0,
        nowPlayIndex:state.nowPlayIndex < 1 ? state.nowPlayIndex : state.nowPlayIndex - 1
      })

    case 'SET_MUSIC':
      return Object.assign({}, state, {
        playing: true,
        nowPlayIndex: action.nowPlayIndex,
        tracks: action.tracks,
        duration:0,
        position:0
      })

    case 'SET_DURATION':
      return Object.assign({}, state, {
        duration: action.duration
      })

    case 'CHANGE_POSITION':
      return Object.assign({}, state, {
        position: action.position
      })
      
    default:
      return state
  }
}

const rootReducer = combineReducers({ player });

export default rootReducer;