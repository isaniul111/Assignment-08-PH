import React from 'react';
import Banner from '../Hero/Banner';
import { useLoaderData } from 'react-router';

const Home = () => {
  const datas=useLoaderData();
    return (
        <div>
          <Banner datas={datas}></Banner>
        </div>
    );
};

export default Home;<h3>i am in home</h3>