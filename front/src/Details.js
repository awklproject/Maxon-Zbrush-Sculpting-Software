import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    let params = useParams();
    // TODO: change main site here and in the offerslist component 
    // in the deployment process
    const mainSite = "http://localhost:8000";
    const getOfferByIDLink = `${mainSite}/getofferbyid/${params.offerID}/`;


    // similar to offerslist compoent 
    // TODO: find a better alternative
    const [offerDetails, setOfferDetails] = useState([]);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await fetch(getOfferByIDLink);
                const data = await response.json();
                setOfferDetails(data);
            } catch (error) {
                console.error('Error fetching offers:', error);
            }
        };
        fetchOffers();
    }, []);


    return (
        <div>
            hello
            deeetails of the offer ${params.offerID}
        </div>
    )
};

export default Details;
