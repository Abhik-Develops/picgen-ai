# PicGen AI

PicGen AI is a web application built using the MERN stack that allows users to generate images from text inputs. It leverages the API of the Hugging Face Stable Diffusion AI Model to create captivating visual content based on user-provided prompts.

## Live Demo: https://picgen-ai.onrender.com

## Screenshots

![image](https://github.com/user-attachments/assets/c1ae31f8-5e90-4392-9e33-db2b6535ecd3)
![image](https://github.com/user-attachments/assets/d19988a9-c461-4ca1-b4b1-eeacd29594d0)

## Features

- **Text-to-Image Generation:** Transform text inputs into visually stunning images.
- **User-Friendly Interface:** Intuitive UI for seamless interaction with the application.
- **Random Prompt Generation:** Option to generate random prompts for quick inspiration.
- **Shareable Images:** Easily share generated images with others in the community.

## Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **API:** Hugging Face Stable Diffusion AI Model

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Abhik-Develops/picgen-ai.git
   ```

2. Navigate to the project directory:

   ```
   cd picgen-ai
   ```

3. Install dependencies:

   ```
   cd frontend
   npm install
   cd ..
   cd backend
   npm install
   cd ..
   ```

4. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```
   PORT = 8000
   DB_URL = mongodb+srv:********************************************************appName=Cluster0
   AI_API_KEY = *************
   CLOUDINARY_CLOUD_NAME = ******
   CLOUDINARY_API_KEY = **************
   CLOUDINARY_API_SECRET = *******************************
   VITE_BACKEND_URL = 'http://localhost:8000'
   NODE_ENV = 'development'
   
   ```

5. Start the development server:

   ```
   cd backend
   npm run dev
   cd ..
   cd frontend
   npm run dev
   cd ..
   ```

6. Visit `http://localhost:5173` in your browser to access the application.

## Usage

1. Enter a prompt in the provided text input field.
2. Click the "Generate" button to create an image based on the input.
3. Optionally, click the "Surprise Me" button to generate a random prompt.
4. Once the image is generated, it will be displayed on the screen.
5. You can share the generated image with others using the provided options.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for any improvements or new features you'd like to see in the project.
