import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Offers() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const { data } = await axios.get('http://localhost:8000/offers/');
                setOffers(data);
            } catch (error) {
                console.error('Error fetching offers', error);
            }
        };

        fetchOffers();
    }, []);

    return (
        <div>
            <h2>Available Offers</h2>
            {offers.map((offer) => (
                <div key={offer.id}>
                    <h3>{offer.title}</h3>
                    <p>{offer.description}</p>
                    <p>Slots: {offer.available_slots}</p>
                    <p>Date: {new Date(offer.date).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
}

export default Offers;
