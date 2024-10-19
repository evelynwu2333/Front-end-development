import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import proj4 from 'proj4';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, Button, ListGroup, Container, Row, Col, Card, Alert } from 'react-bootstrap';


// Fix the default marker icon issue in leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


const App = () => {
  // variables
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const initialLocation = { lat: -35.308433, lng: 149.124668 };

  const MapUpdater = ({ selectedLocation }) => {
    const map = useMap();

    useEffect(() => {
      if (selectedLocation) {
        // console.log(selectedLocation);
        map.setView([selectedLocation.lat, selectedLocation.lng], 13);
      } 
    }, [selectedLocation, map]);
    return null;
  };

  useEffect(() => {
    if (window.google && window.google.maps) {
      window.autocompleteService = new window.google.maps.places.AutocompleteService();
      window.placesService = new window.google.maps.places.PlacesService(document.createElement('div'));
    } else {
      setError("Google Maps JavaScript API failed to load.");
    }
  }, []);

  const fetchSuggestions = useCallback((input) => {
    if (window.autocompleteService) {
      try {
        setError(null);
        const latLngPattern = /^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/;
        const utmPattern = /^\d+\s+\d+\s+\d+[A-Z]$/i;
        if (latLngPattern.test(input)) {
          const [lat, lng] = input.split(',').map(Number);;
          setSelectedLocation({ lat, lng });
          fetchWeather(lat, lng);
          return; 
        } else if (utmPattern.test(input)){
          // check if the input is UTM coordinates
          const [easting, northing, zone] = input.split(/\s+/);
          const zoneNumber = zone.slice(0, -1);
          const zoneLetter = zone.slice(-1);
          const [lat, lng] = proj4(
            `+proj=utm +zone=${zoneNumber}${zoneLetter}`, 
            '+proj=longlat +datum=WGS84', 
            [parseFloat(easting), parseFloat(northing)]
          );
          console.log("UTM detected:", {lat, lng});
          setSelectedLocation({lat, lng});
          fetchWeather(lat, lng);
          return;
        } else {
          console.log("Fetching suggestions for input:", input);
          window.autocompleteService.getPlacePredictions(
            {input, types: ['geocode'] }, (predictions, status) => {
              console.log("Suggestions fetch status:", status);
              if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                console.log("Suggestions fetched:", predictions);
                setSuggestions(predictions);
              } else {
                console.error("Failed to fetch location suggestions with status:", status);
                setError("Failed to fetch location suggestions. Please try again.")
              }
            }
          );
        }
      } catch (error) {
        console.error("Error fetch suggestions: ", error);
        setError("Failed to fetch location suggestions. Please try again");
      }
    } else {
      console.error("Autocomplete service is not initialized");
    }
  }, []);

  // const sleep = (ms) => {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // };
  
  const fetchWeather = useCallback(async(lat, lng) => {
    try {
      // await sleep(10000);
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat: lat,
          lon: lng,
          appid: 'YOUR_API_KEY',
          units: 'metric'
        }
      });
      setWeather(response.data);
    } catch (error) {
      setError("Error fetching weather data. Please try again.");
    }
  }, []);

  const handleInputChange = async (e) => {
    const input = e.target.value
    setInput(input);
    setError(null);
    if (input.length > 2) {
      fetchSuggestions(input);
    } else {
      setSuggestions([])
    }
  };

  const handleSelect = (placeId) => {
    if (window.placesService) {
      try {
        console.log("Fetching place details for placeId:", placeId);
        window.placesService.getDetails({ placeId }, (place, status) => {
          console.log("Place details response status:", status);
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setSuggestions([]);
            const location = place.geometry.location;
            console.log("Fetched location:", location);
            setSelectedLocation({ lat: location.lat(), lng: location.lng() });
            // Fetch weather for the selected location
            fetchWeather(location.lat(), location.lng());
            // console.log(location.lat(), location.lng());
          } else {
            console.error("Failed to fetch place details with status:", status);
            setError("Failed to fetch place details. Please try again.");
          }
        });
      } catch (error) {
        console.error("Error fetching place details:", error);
        setError("Failed to fetch place details. Please try again.");
      }
    } else {
      console.error("Places service is not initialized");
    }
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Weather App</Navbar.Brand>
      </Navbar>
      <Container fluid>
        <Row className="justify-content-sm-left mt-5">
          <Col md={12}>
            <Form>
              <Form.Group controlId="formLocationInput">
                <Form.Label>Enter location or coordinates</Form.Label>
                <Form.Control 
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Search for places..."
                />
              </Form.Group>
              {/* <Button variant="primary" className="mt-3">Search</Button> */}
            </Form>
            <ListGroup className="mt-3">
              {suggestions.map(suggestion => (
                <ListGroup.Item key={suggestion.place_id} onClick={() => handleSelect(suggestion.place_id)}>
                {suggestion.description} 
                </ListGroup.Item>
              ))}
            </ListGroup>
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
          </Col>
        </Row>
        <Row>
          <Col md={6} className="p-3">
            <MapContainer 
              center={[initialLocation.lat, initialLocation.lng]} 
              zoom={13} 
              style={{ height: '60vh', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <MapUpdater 
                selectedLocation={selectedLocation} 
              />
              {selectedLocation && (
                <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
                  <Popup>
                    Selected Location
                  </Popup>
                </Marker>
              )}
              
            </MapContainer>
          </Col>
          {weather && (
            <Col md={6} className="p-3">
              <Card>
                <Card.Body>
                  <Card.Title>Weather Summary</Card.Title>
                  <Card.Text>
                    <strong>Location:</strong> {weather.name}<br />
                    <strong>Temperature:</strong> {weather.main.temp} &#176;C<br />
                    <strong>Weather:</strong> {weather.weather[0].description}<br />
                    <strong>Humidity:</strong> {weather.main.humidity} %<br />
                    <strong>Wind Speed:</strong> {weather.wind.speed} m/s<br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>)}
          </Row>
      </Container>
    </div>
  );
};


export default App;
