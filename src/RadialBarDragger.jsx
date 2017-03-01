import React, {PropTypes} from 'react';
import debounce from './debounce';

export default class RadialBarDragger extends React.Component {

    constructor() {
        super();

        this.onStartDrag = debounce(this.onStartDrag, 200);
        this.onStartDrag = this.onStartDrag.bind(this);
        this.onEndDrag = this.onEndDrag.bind(this);
        this.onDrag = this.onDrag.bind(this);
    }

    onStartDrag() {
        this.handleDrag = true;

        document.addEventListener('mouseup', this.onEndDrag, true);
        document.addEventListener('mousemove', this.onDrag);
    }

    onDrag(e) {
        this.handleDrag && this.props.onDrag(this.props.index, {x: e.clientX, y: e.clientY});
    }

    onEndDrag() {
        this.handleDrag = false;

        document.removeEventListener('mouseup', this.onEndDrag, true);
        document.removeEventListener('mousemove', this.onDrag);
    }

    render() {
        const {coords, index, rotate} = {...this.props};

        return (
            <g className='dragger' x='250' y='250' transform={`translate(${coords.x}, ${coords.y})`}>
                <defs>
                    <pattern id={`arrow-${index}`} x='0%' y='0%' height='100%' width='100%'>
                        <image x='0' y='0' width='26' height='26' xlinkHref='images/arrow.png' />
                    </pattern>
                </defs>
                <circle r={13} fill={'#697a87'} onMouseDown={this.onStartDrag} />
                <circle transform={`rotate(${rotate})`} cx='5' r={13} fill={`url(#arrow-${index})`} onMouseDown={this.onStartDrag} />
                <circle transform={`rotate(${180 + rotate})`} cx='6' r={13} fill={`url(#arrow-${index})`} onMouseDown={this.onStartDrag} />
            </g>
        );
    }
}

RadialBarDragger.propTypes = {
    index: PropTypes.number.isRequired,
    coords: PropTypes.array.isRequired,
    onDrag: PropTypes.func.isRequired,
    rotate: PropTypes.number.isRequired
};
