import RadialSlider from './RadialSlider.jsx';
import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import slider from './reducers';

const initialValues = {
    calculations: [
        {scale: 3, value: 31, color: '#820008'},
        {scale: 4, value: 50, color: '#2f7490'},
        {scale: 5, value: 36, color: '#3f505b'}
    ],
    max: 72
};

const store = createStore(slider, initialValues);

const render = () => ReactDom.render(<RadialSlider {...store.getState()}
    onChange={(index, value) => { store.dispatch({ type: 'CHANGE', index, value }); }} />,
    document.getElementById('radial-slider'));

render();

store.subscribe(render);
