const axios = require('axios');

exports.getFlights = async (req, res) => {
    try {
        const response = await axios.get('https://data.vatsim.net/v3/vatsim-data.json');
        const flights = response.data.pilots.map((pilot) => ({
            callsign: pilot.callsign,
            latitude: pilot.latitude,
            longitude: pilot.longitude,
            altitude: pilot.altitude,
            heading: pilot.heading,
            groundspeed: pilot.groundspeed,
            aircraft: pilot.plan.aircraft,
            departure: pilot.plan.departure,
            arrival: pilot.plan.arrival,
            transponder: pilot.transponder,
        }));

        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${flights[0].latitude}&lon=${flights[0].longitude}&appid=YOUR_OPENWEATHERMAP_API_KEY`);
        const weather = weatherResponse.data;

        res.json({ flights, weather });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch flights or weather data' });
    }
};