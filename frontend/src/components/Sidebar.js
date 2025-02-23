import React from 'react';

function Sidebar() {
    return (
        <aside className="w-64 h-full fixed bg-gray-800 p-5 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
                <label>Airline:</label>
                <input type="text" id="filterAirline" className="input" placeholder="e.g., Delta" />
            </div>
            <div>
                <label>Aircraft Type:</label>
                <input type="text" id="filterAircraft" className="input" placeholder="e.g., B738" />
            </div>
            <div>
                <label>Altitude (ft):</label>
                <input type="number" id="filterAltitude" className="input" placeholder="> 30000" />
            </div>
            <div>
                <label>Status:</label>
                <select id="filterStatus" className="input" title="Flight Status">
                    <option value="">All</option>
                    <option value="departure">Departure</option>
                    <option value="enroute">Enroute</option>
                    <option value="arriving">Arriving</option>
                    <option value="landed">Landed</option>
                </select>
            </div>
        </aside>
    );
}

export default Sidebar;