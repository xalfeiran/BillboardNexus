import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Map from './components/Map/Map';
import BillboardListing from './components/BillboardListing/BillboardListing';
import Footer from './components/Footer/Footer';
import billboardData from './data/billboardData.json'; // Import the data
import './App.css';


function App() {

  const logo = '/BillboardNexus_logo.png'; // Path to the logo image

  // set to cancun as default
  const [mapCenter, setMapCenter] = useState([21.161908, -86.851528]); // Default center

  // to each billboard object, add a image property with a value of the billboard image
  billboardData.forEach((billboard) => {
    billboard.image ='/billboard-marker.png'; // Path to the billboard image
  });

  const handleSearch = (searchTerm) => {
    console.log(`Searching for: ${searchTerm}`);
    // In a real app, you might update the state with the search results here.
  };

  const handleBillboardClick = (location) => {
    console.log('Billboard clicked: ', location);
    setMapCenter(location);
  };

  console.log('billboarNexus');

  useEffect(() => {
    // Function to get the user's current location
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setMapCenter([position.coords.latitude, position.coords.longitude]);
          },
          (error) => {
            console.error("Error getting the user's location: ", error);
            // Handle errors or set a default location here if needed
          }
        );
      } else {
        console.log('Geolocation is not supported by this browser.');
        // Handle case where browser doesn't support Geolocation
      }
    };

    getUserLocation();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="App">
      <Header />
      <main>
      <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" /> {/* Logo image */}
        </div>
        <SearchBar onSearch={handleSearch} />
        <Map billboards={billboardData} center={mapCenter} />
        <BillboardListing listings={billboardData} onBillboardClick={handleBillboardClick} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
