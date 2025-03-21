import { useReducer, useCallback } from 'react';
import { 
  // MIN_COUNT, 
  // MAX_COUNT,
  DEFAULT_FORM_VALUE,
  SET_NAME_ACTION,
  SET_TEXT_ACTION,
  SET_RATING_INCREMENT,
  SET_RATING_DECREMENT,
  CLEAR_FORM
   } from '../constants/config';
import { reducer } from '../reducers/reducer';

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const { name, text, rating } = form;

  const setName = useCallback (
    (name) => dispatch({ type: SET_NAME_ACTION, payload: name }),
    []
  );
  const setText = useCallback (
    (text) => dispatch({ type: SET_TEXT_ACTION, payload: text }),
    []
  );
  const setRatingIncrement = useCallback (
    () => dispatch({ type: SET_RATING_INCREMENT }),
    []
  );
  const setRatingDecrement = useCallback(
    () => dispatch({ type: SET_RATING_DECREMENT }),
    []
  );
  const clearForm = useCallback (
    () => dispatch({ type: CLEAR_FORM }),
    []
  );

  return {
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