import { bindActionCreators } from '@reduxjs/toolkit';
import { actions } from '../../app/store/actions';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';

const useAppDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(actions, dispatch);
};

export default useAppDispatch;
