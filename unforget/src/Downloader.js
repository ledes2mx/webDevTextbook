import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { downloadName } from './actions';

const dispatch = useDispatch();

return (
  <button onClick={() => dispatch(downloadName())}>Download</button>
);