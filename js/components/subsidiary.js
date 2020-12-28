export const elementHidden = (HTML__Element) => {
    HTML__Element.style.display = "none";
};

export const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

export const singRandom = (arr, index) => {
    checkedGame.elements.sing(arr[index]);
};