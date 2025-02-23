import React from 'react';
import { motion } from 'framer-motion';

function FlightDetails() {
    return (
        <motion.div
            id="flightDetailsPopup"
            className="fixed right-5 top-20 bg-gray-800 p-6 rounded-lg shadow-2xl w-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="popup-content">
                <h3 className="text-2xl font-semibold" id="popup-callsign">Flight Callsign</h3>
                <p><strong>From:</strong> <span id="popup-departure">Departure</span></p>
                <p><strong>To:</strong> <span id="popup-arrival">Arrival</span></p>
                <p><strong>Aircraft:</strong> <span id="popup-aircraft">Aircraft Type</span></p>
                <p><strong>Altitude:</strong> <span id="popup-altitude">Altitude</span> ft</p>
                <p><strong>Speed:</strong> <span id="popup-speed">Speed</span> kts</p>
                <p><strong>Status:</strong> <span id="popup-status">Status</span></p>
                <p><strong>Squawk:</strong> <span id="popup-squawk">Squawk Code</span></p>
                <p><strong>Route:</strong> <span id="popup-route">Route</span></p>
                <button className="bg-red-500 mt-4 px-4 py-2 rounded w-full">Close</button>
            </div>
        </motion.div>
    );
}

export default FlightDetails;