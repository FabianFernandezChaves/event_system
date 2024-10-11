/**
 * Fetch a short version of the address from the provided coordinates.
 * 
 * @async
 * @param {number} latitude - The latitude of the location.
 * @param {number} longitude - The longitude of the location.
 * @returns {Promise<string|null>} The short address in the format "City, Country", or null if an error occurs.
 */
export async function getShortAddressFromCoordinatesOSM(latitude, longitude) {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const city = data.address.city || data.address.town || data.address.village;
    const country = data.address.country;

    return `${city}, ${country}`;
  } catch (error) {
    console.error('Error fetching address:', error);
    return null;
  }
}

/**
 * Fetch the full address from the provided coordinates.
 * 
 * @async
 * @param {number} latitude - The latitude of the location.
 * @param {number} longitude - The longitude of the location.
 * @returns {Promise<string|null>} The full address (display_name) from OpenStreetMap, or null if an error occurs.
 */
export async function getLongAddressFromCoordinatesOSM(latitude, longitude) {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Return the full address from the "display_name" field
    return data.display_name;
  } catch (error) {
    console.error('Error fetching address:', error);
    return null;
  }
}
