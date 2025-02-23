import SimConnect
import socketio

sio = socketio.Client()

@sio.event
def connect():
    print('Connected to server')

@sio.event
def disconnect():
    print('Disconnected from server')

sio.connect('http://localhost:5000')

sm = SimConnect.SimConnect()
aq = sm.AircraftRequests()

while True:
    data = {
        'latitude': aq.get('PLANE_LATITUDE'),
        'longitude': aq.get('PLANE_LONGITUDE'),
        'altitude': aq.get('PLANE_ALTITUDE'),
        'heading': aq.get('PLANE_HEADING_DEGREES_TRUE'),
        'airspeed': aq.get('AIRSPEED_INDICATED'),
    }
    sio.emit('msfs_data', data)