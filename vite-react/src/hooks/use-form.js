'use client';

import { useReducer } from 'react';
import { 
  MIN_COUNT, 
  MAX_COUNT,
  DEFAULT_FORM_VALUE,
  SET_NAME_ACTION,
  SET_TEXT_ACTION,
  SET_RATING_INCREMENT,
  SET_RATING_DECREMENT,
  CLEAR_FORM
  } from '../constants/config';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return { ...state, name: payload };
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
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
      return { ...DEFAULT_FORM_VALUE };
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const { name, text, rating } = form;

  const setName = (name) => {
    dispatch({ type: SET_NAME_ACTION, payload: name });
  };

  const setText = (text) => {
    dispatch({ type: SET_TEXT_ACTION, payload: text });
  };
  
  const setRatingIncrement = () => {
    dispatch({ type: SET_RATING_INCREMENT });
  };

  const setRatingDecrement = () => {
    dispatch({ type: SET_RATING_DECREMENT });
  };

  const clearForm = () => {
    dispatch({ type: CLEAR_FORM });
  };

  return {
    form,
    name,
    text,
    rating,
    setRatingIncrement,
    setRatingDecrement,
    setName,
    setText,
    clearForm,
  };
};