import React from 'react';

export default class RadialBar extends React.Component {

    constructor() {
        super();
    }

    render() {

        let {value, color} = {...this.props.calculation};

        return (
            <g>
                <circle id='bar'
                    r={this.props.radius}
                    cx={this.props.center.x}
                    cy={this.props.center.y}
                    fill='transparent'
                    stroke={color}
                    strokeWidth={26}
                    strokeDasharray={Math.PI * 2 * this.props.radius}
                    strokeDashoffset={(1 - value / this.props.max) * Math.PI * 2 * this.props.radius}
                    transform={`rotate(270,${this.props.center.x},${this.props.center.y})`} />
            </g>
        );
    }
}

RadialBar.propTypes = {
    index: React.PropTypes.number.isRequired,
    max: React.PropTypes.number.isRequired,
    radius: React.PropTypes.number.isRequired,
    calculation: React.PropTypes.object.isRequired,
    center: React.PropTypes.object.isRequired
};
