// external deps
// import { v4 as uuid } from 'uuid';

// animations
import { Swivel } from './Swivel';
import { FlatListTwoCol } from './FlatListTwoCol';
import { ViewTwoCol } from './ViewTwoCol';

export const animations = {
    [Swivel.title]: Swivel.component,
    [FlatListTwoCol.title]: FlatListTwoCol.component,
    [ViewTwoCol.title]: ViewTwoCol.component
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
