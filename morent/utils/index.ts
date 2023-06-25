const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ae25c5b0dmsh1dcf2111f7d15ddp103047jsn61d0765af8d0',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export async function fetchCar() {
    const headers = {
        headers: {
            'X-RapidAPI-Key': '6ae25c5b0dmsh1dcf2111f7d15ddp103047jsn61d0765af8d0',
		    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
		headers: headers,
	});

	const result = await response.json();
	return result;
} 