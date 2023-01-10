
import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export function GoogleMap() {

    const [coordinates, setCoordinates] = useState({ lat: 32.0853, lng: 34.7818 })

    const zoom = 12

    // const handleClick = ({ lat, lng }) => {
    //     setCoordinates({ lat, lng })
    // }
    const HaifaLoc = { lat: 32.794044, lng: 34.98957 }

    const TlvLoc = { lat: 32.0853, lng: 34.7818 }

    const AshdodLoc = { lat: 31.801447, lng: 34.643497 }

    return (
        <div>
            <div className="locations-cont">
                <h2>Our Branches</h2>

                <h3 onClick={() => setCoordinates({ ...HaifaLoc })}> Haifa</h3>
                <h3 onClick={() => setCoordinates({ ...TlvLoc })}> Tel-aviv</h3>
                <h3 onClick={() => setCoordinates({ ...AshdodLoc })}>Ashdod </h3>
            </div>
            {/* // Important! Always set the container height explicitly */}
            <div style={{ height: '70vh', width: '90%', margin: 'auto' }}>
                <GoogleMapReact
                    // onClick={handleClick}
                    bootstrapURLKeys={{ key: "AIzaSyA5YAKbctMWmj2etXv-KY7MSXDMGaWr0qs" }}
                    defaultCenter={{ lat: 32.0853, lng: 34.7818 }}
                    center={coordinates}
                    defaultZoom={zoom}
                >
                    <AnyReactComponent
                        // lat={coordinates.lat}
                        // lng={coordinates.lng}
                        {...TlvLoc}
                        text="🍎🍎🍎"
                    />
                    <AnyReactComponent
                        // lat={31.801447}
                        // lng={34.643497}
                        {...AshdodLoc}
                        // lat: 32.0853, lng: 34.7818
                        text="🍎🍎🍎"
                    />
                    <AnyReactComponent
                        lat={32.794044}
                        lng={34.989571}
                        {...HaifaLoc}
                        text="🍎🍎🍎"
                    />
                </GoogleMapReact>
            </div>
        </div >
    );
}