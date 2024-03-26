import { surpriseMePrompts } from '../constants';
import { saveAs } from 'file-saver';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
    if(randomPrompt === prompt){
        return getRandomPrompt(prompt);
    }
    return randomPrompt;
}

export async function downloadImage(_id, photoUrl) {
    try {
        const response = await fetch(photoUrl);
        const blob = await response.blob();
        const filename = `download-${_id}.jpg`;
        saveAs(blob, filename);
    } catch (error) {
        console.error('Error downloading image:', error);
    }
}