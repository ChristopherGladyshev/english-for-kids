export const elementHidden = (HTML__Element) => {
    HTML__Element.style.display = "none";
};

export const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

export const singRandom = (arr, index) => {
    sing(arr[index]);
};

export const sing = (text) => {
    const audio = new Audio();
    audio.src = `audio/${text}.mp3`;
    audio.autoplay = true;
    return audio;
}