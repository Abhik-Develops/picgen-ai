import dotenv from 'dotenv';
dotenv.config({path: '../.env'});

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
		{
			headers: { Authorization: `Bearer ${process.env.AI_API_KEY}` },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
}

export default query;