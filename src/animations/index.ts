// external deps
// import { v4 as uuid } from 'uuid';

// animations
import { Swivel } from './Swivel';

export const animations = {
    [Swivel.SwivelTitle]: Swivel.SwivelFC
};

export const animationsTitleData = Object.keys(animations).map((title, id) => {
    return {
        title,
        id: id.toString()
    }
});

export interface TitleData {
    title: string;
    id: string;
}