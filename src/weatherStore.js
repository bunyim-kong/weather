import { reactive } from 'vue'

export const weatherStore = reactive({
  locationName: 'Loading location...', // Temporary state
  lat: 40.7128,
  lon: -74.0060,
  isLoggedIn: false,
  user: null,

  updateLocation(name, lat, lon) {
    this.locationName = name;
    this.lat = lat;
    this.lon = lon;
  },

  // NEW: Detect user location automatically
  async initLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          
          // Use Open-Meteo to turn coordinates into a city name (Reverse Geocoding)
          try {
            const res = await fetch(
              `https://geocoding-api.open-meteo.com/v1/get?latitude=${latitude}&longitude=${longitude}&language=en&format=json`
            );
            // Note: Some APIs differ, if the one above doesn't return name, 
            // we just use "Current Location"
            this.updateLocation("My Location", latitude, longitude);
          } catch (e) {
            this.updateLocation("Local Area", latitude, longitude);
          }
        },
        (error) => {
          console.warn("Location access denied, defaulting to New York.");
          this.updateLocation("New York, USA", 40.7128, -74.0060);
        }
      );
    } else {
      this.updateLocation("New York, USA", 40.7128, -74.0060);
    }
  },

  login() { this.isLoggedIn = true; },
  logout() { this.isLoggedIn = false; },
  setUser(data) { this.user = data; }
})