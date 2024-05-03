async function trackLocation() {
    const phoneNumber = document.getElementById("phoneNumber").value;

    try {
        const response = await fetch('/track', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phoneNumber })
        });
        
        if (!response.ok) {
            throw new Error('Failed to track location');
        }
        
        const location = await response.json();
        document.getElementById("result").innerHTML = `Latitude: ${location.latitude}, Longitude: ${location.longitude}`;
    } catch (error) {
        console.error(error);
        document.getElementById("result").innerHTML = 'Failed to track location';
    }
}
