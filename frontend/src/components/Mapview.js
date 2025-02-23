import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import io from 'socket.io-client';
import axios from 'axios';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const socket = io('http://localhost:5000');

function MapView() {
    const [flights, setFlights] = useState([]);
    const [map, setMap] = useState(null);

    useEffect(() => {
        const mapInstance = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [-74.5, 40],
            zoom: 9,
        });

        setMap(mapInstance);

        socket.on('msfs_data', (data) => {
            setFlights((prevFlights) => [...prevFlights, data]);
        });

        return () => mapInstance.remove();
    }, []);

    useEffect(() => {
        if (map) {
            flights.forEach((flight) => {
                new mapboxgl.Marker({ color: 'red' })
                    .setLngLat([flight.longitude, flight.latitude])
                    .addTo(map);
            });
        }
    }, [flights, map]);

    return <div id="map" className="h-screen"></div>;
}

export default MapView;