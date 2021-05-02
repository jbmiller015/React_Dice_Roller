import d20 from './d20.JPG';
import d12 from './d12.jpg';
import d10 from './d10.png';
import d8 from './d8.png';
import d6 from './d6.jpg';
import d4 from './d4.png';
import d2 from './d2.png';

export const imageSelector = (maxVal) => {

    const images = {
        20: d20,
        12: d12,
        10: d10,
        8: d8,
        6: d6,
        4: d4,
        2: d2
    }

    return images[maxVal] ? images[maxVal] : d20;

}

