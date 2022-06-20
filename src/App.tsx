import './App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelectior';
import { RootState } from './store';
import Router from './Router';

const App: React.FC = () => {

  const dispatch = useDispatch()
  const { data, isLogin } = useTypedSelector((state: RootState) => state.userReducer)

  return (
    <Router data={data} isLogin={isLogin}/>
  );
}

export default App;
