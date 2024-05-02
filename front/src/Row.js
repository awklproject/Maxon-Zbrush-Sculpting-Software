import React, {useState, useEffect} from "react";

const base_url = "https://localhost:8000/"

const Row = ({title, fetchUrl, isLargeRow}) => {

    const [offers, setOffers] = useState([]);

    useEffect(()=>{
        // this is how we use async inside useEffect
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setOffers(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }
    const handleClick = (offer) => {
        console.log(offer)
    };

    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {offers.map((offer)=>(
                    <img
                        onClick={()=>handleClick(offer)}
                        key={offer.id}
                        src={`${base_url}${
                            isLargeRow ? offer.poster_path : offer.bd
                        }`}
                        alt={offer.name}
                        className={`row_poster ${
                            isLargeRow && "row_poster_large"
                        }`}
                    />
                ))}
            </div>
        </div>)
};

export default Row;
