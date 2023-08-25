import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../Pages/MainLayout';
import Feed from '../Pages/Feed';
import Visit from '../Pages/Visit';
import Review from '../Pages/Review';
import Orders from '../Pages/Orders';
import MyPlace from '../Pages/MyPlace';

function Routers(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='feed' element={<Feed />} />
          <Route index element={<Navigate replace to='/feed' />} />
          <Route path='visit' element={<Visit />} />
          <Route path='review' element={<Review />} />
          <Route path='orders' element={<Orders />} />
          <Route path='myplace' element={<MyPlace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;