import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import proj4 from 'proj4';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, Button, ListGroup, Container, Row, Col, Card, Alert } from 'react-bootstrap';

// Correctly setting the default icon options
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const App = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [confirmedLocation, setConfirmedLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const MapUpdater = ({ location }) => {
    const map = useMap();

    useEffect(() => {
      if (location) {
        map.setView([location.lat, location.lng], 13);
      }
    }, [location, map]);
  return null
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
      } catch (error) {
        console.error("Error fetch suggestions: ", error);
        setError("Failed to fetch location suggestions. Please try again");
      }
    } else {
      console.error("Autocomplete service is not initialized");
    }
  }, []);

  // const fetchPlaceDetails = useCallback((placeId) => {
  //   if (window.placeService) {
  //     try {
  //       console.log("Fetching place details for placeId:", placeId);
  //       window.placeService.getDetails(
  //         {placeId}, (place, status) => {
  //           console.log("Place details response status:", status);
  //           if (status === window.google.maps.places.PlaceServiceStatus.OK) {
  //             const location = place.geometry.location;
  //             console.log("Fetched location:", location);
  //             setSelectedLocation({lat: location.lat(), lng: location.lng()});
  //           } else {
  //             console.error("Failed to fetch place details with status:", status);
  //             setError("Failed to fetch location details. Please try again.");
  //           }
  //         }
  //       );        
  //     } catch (error) {
  //       console.error("Error fetching place details:", error);
  //       setError("Failed to fetch place details. Please try again.");
  //     }
  //   }
  // }, []); 

  const fetchPlaceByText = useCallback((input) => {
    if (window.placeService) {
      try {
        console.log("Fetching place by text for input:", input);
        window.placesService.textSearch(
          {query: input}, (results, status) => {
            console.log("Text search response status:", status);
            if (status === window.google.maps.places.PlaceServiceStatus.OK && results.length > 0) {
              const location = results[0].geometry.location;
              console.log("Fetched location from text search:", location);
              setSelectedLocation({lat: location.lat(), lng: location.lng()});
              fetchWeather(location.lat(), location.lng());
            } else {
              console.error("Failed to fetch location by text with status:", status);
              setError("Failed to fetch location details by text. Please try again.")
            }
          }
        );
      } catch (error) {
        console.error("Error fetching location by text:", error);
        setError("Failed to fetch location details by text. Please try again");
      }
  
    }
  }, [])

  const fetchWeather = useCallback(async(lat, lng) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat: lat,
          lon: lng,
          appid: '60d545799457c43d0ee69204110012da',
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
            const location = place.geometry.location;
            console.log("Fetched location:", location);
            setSelectedLocation({ lat: location.lat(), lng: location.lng() });
            // Fetch weather for the selected location
            fetchWeather(location.lat(), location.lng());
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

  const handleSearch = async () => {
    try {
      setError(null);
      const latLngPattern = /^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/;
      if (latLngPattern.test(input)) {
        const [lat, lng] = input.split(',').map(Number);;
        setSelectedLocation({ lat, lng });
        fetchWeather(lat, lng);
        return; 
      }
  
      // check if the input is UTM coordinates
      const utmPattern = /^\d+\s+\d+\s+\d+[A-Z]$/i;
      if (utmPattern.test(input)) {
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
        return;
      }
  
      // if not coordinates, assume it is a place name
      console.log('Fetching place by text...');
      fetchPlaceByText(input);
    } catch (error) {
      console.error("Error during search:", error);
      setError("Failed to fetch location details. Please try again.")
    }
  };

  const handleConfirm = () => {
    if (selectedLocation) {
      setConfirmedLocation(selectedLocation);
      fetchWeather(selectedLocation.lat, selectedLocation.lng);
    }
  };



  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Weather App</Navbar.Brand>
      </Navbar>
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col xs={12} md={6}>
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
              <Button variant="primary" onClick={handleSearch} className="mt-3">Search</Button>
            </Form>
            <ListGroup className="mt-3">
              {suggestions.map(suggestion => (
                <ListGroup.Item key={suggestion.place_id} onClick={() => handleSelect(suggestion.place_id)}>
                {suggestion.description} 
                </ListGroup.Item>
              ))}
            </ListGroup>
            {selectedLocation && <Button variant="success" onClick={handleConfirm} className="mt-3">Search</Button>}
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
          </Col>
        </Row>
        {confirmedLocation && (
          <>
            <Row className="justify-content-md-center mt-5">
              <Col md={12}>
                <MapContainer 
                  center={[confirmedLocation.lat, confirmedLocation.lng]} 
                  zoom={13} 
                  style={{ height: '400px', width: '100%'}}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[confirmedLocation.lat, confirmedLocation.lng]}>
                    <Popup>
                      Selected Location
                    </Popup>
                  </Marker>
                  <MapUpdater location={confirmedLocation} />  
                </MapContainer>
              </Col>
            </Row>
            {weather && (
              <Row className="justify-content-md-center mt-5">
                <Col md={6}>
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
                </Col>
              </Row>
            )}
          </>
        )}
      </Container>
    </div>
  );
};


export default App;
