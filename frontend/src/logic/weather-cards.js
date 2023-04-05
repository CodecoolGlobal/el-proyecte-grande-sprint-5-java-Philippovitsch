export async function loadWeatherCards(userData, defaultLocations) {
    const tempWeatherCards = []
    if (!userData) {
        return tempWeatherCards;
    }
    for (const location of defaultLocations) {
        const card = await fetchWeatherData(location);
        card.latitude = location.latitude;
        card.longitude = location.longitude;
        tempWeatherCards.push(card);
    }
    return tempWeatherCards;
};