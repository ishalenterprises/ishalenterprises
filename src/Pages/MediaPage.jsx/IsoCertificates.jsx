import React, { useEffect } from 'react';
import PotfolioAndGallery from '../../Components/PotfolioAndGallery';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';


const IsoCertificates = () => {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <>
        <Header />
        <Footer />
        
        </>
    )
}

export default IsoCertificates;
