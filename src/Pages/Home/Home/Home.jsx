import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import ExtraInfo from '../ExtraInfo/ExtraInfo';
import SellerText from '../SellerText/SellerText';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SellerText></SellerText>
            <ExtraInfo></ExtraInfo>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;