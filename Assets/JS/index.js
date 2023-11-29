function detectDeviceType() {
    const userAgent = navigator.userAgent;

    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
        return 'tablet';
    } else if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera Mini/i.test(userAgent)) {
        return 'phone';
    } else {
        return 'computer';
    }
}

// Example usage:
var deviceType = detectDeviceType();
console.log('Device Type:', deviceType);

function logDeviceTypeOnResize() {
    var previousDeviceType = detectDeviceType();

    window.addEventListener('resize', () => {
        const currentDeviceType = detectDeviceType();

        if (currentDeviceType !== previousDeviceType) {
            console.log('Device Type:', currentDeviceType);
            // Update the previous device type
            previousDeviceType = currentDeviceType;
        }
    });
}

// Call the function to start listening for resize events
logDeviceTypeOnResize();