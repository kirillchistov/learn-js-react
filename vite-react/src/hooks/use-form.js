import { useReducer } from 'react';
import { MIN_COUNT, MAX_COUNT } from '../constants/config';

const DEFAULT_FORM_VALUE = {
  name: '',
  text: '',
  count: MIN_COUNT,
  rating: 5,
//   nameError: '',
};

const SET_NAME_ACTION = 'SET_NAME_ACTION';
const SET_TEXT_ACTION = 'SET_TEXT_ACTION';
// const SET_REVIEW_ACTION = 'SET_REVIEW_ACTION';
const SET_RATING_INCREMENT = 'SET_RATING_INCREMENT';
const SET_RATING_DECREMENT = 'SET_RATING_DECREMENT';
const CLEAR_FORM = 'CLEAR_FORM';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
    //   ValidityState(name);
      return { ...state, name: payload };
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    // case SET_REVIEW_ACTION:
    //   return { ...state, review: payload };
    case SET_RATING_INCREMENT:
      return {
        ...state,
        rating: state.rating >= MAX_COUNT ? MAX_COUNT : state.rating + 1,
      };
    case SET_RATING_DECREMENT:
      return {
        ...state,
        rating: state.rating > MIN_COUNT ? state.rating - 1 : MIN_COUNT,
      };
    
    case CLEAR_FORM:
      return DEFAULT_FORM_VALUE;
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const { name, text, count } = form;

  const setName = (name) => dispatch({ type: SET_NAME_ACTION, payload: name });
  const setText = (text) => dispatch({ type: SET_TEXT_ACTION, payload: text });
  const setRatingIncrement = () => dispatch({ type: SET_RATING_INCREMENT });
  const setRatingDecrement = () => dispatch({ type: SET_RATING_DECREMENT });
  const clearForm = () => dispatch({ type: CLEAR_FORM });

  return {
    name,
    text,
    count,
    setRatingIncrement,
    setRatingDecrement,
    setName,
    setText,
    clearForm,
  };
};