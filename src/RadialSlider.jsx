import React from 'react';
import RadialBar from './RadialBar.jsx';
import SummaryBox from './SummaryBox.jsx';
import RadialBarDragger  from './RadialBarDragger.jsx';
import valueToCartesian from './valueToCartesian';
import cartesianToValue  from './cartesianToValue';

export default class RadialSlider extends React.Component {

    constructor() {
        super();

        this.onDrag = this.onDrag.bind(this);
    }

    onDrag(index, coords) {
        this.props.onChange(index, Math.round(cartesianToValue(coords, this.props.center) * this.props.max));
    }

    getTotal() {
        return this.props.calculations[1].value * this.props.calculations[1].scale +
           this.props.calculations[2].value * this.props.calculations[2].scale -
           this.props.calculations[0].value * this.props.calculations[0].scale;
    }

    render() {
        return (
            <div className='container' style={{height: '500px'}}>
                <div className='slider-column'>
                    <svg width={500} height={500}
                         version='1.1' xmlns='http://www.w3.org/2000/svg'>
                        {
                            Array.apply(null, {length: this.props.max}).map(Number.call, Number).map(item => {
                                return (
                                    <g key={`bar-${item}`} transform={`translate(${this.props.center.x}, ${this.props.center.y}) rotate(${((item * 5) - 90)})`} >
                                        <line strokeDasharray='3, 3' x1={0} y1={0}
                                            x2={210} y2={0} />
                                        <text className='axis-text' key={12} x={215} y={-5} fontSize={10} fill={'#696a87'} textAnchor='middle'>{item}</text>
                                    </g>
                                );
                            })
                        }

                        <circle id='center' r={60} fill='#00847e' cx={this.props.center.x} cy={this.props.center.y}  />

                        {
                            this.props.calculations.map((calculation, index) => {
                                return (
                                    <RadialBar className='radial-bar' index={index} key={`bar-${index}`} radius={90 + index * 40} center={this.props.center}
                                        max={this.props.max} calculation={calculation} />
                                );
                            })
                        }

                        {
                            this.props.calculations.map((calculation, index) => {
                                return (<RadialBarDragger index={index} key={`dragger-${index}`}
                                    onDrag={this.onDrag}
                                    coords={valueToCartesian(calculation.value / this.props.max, this.props.center, 90 + index * 40)}
                                    rotate={calculation.value / this.props.max * 360} />);
                            })
                        }

                        <g transform={`translate(${this.props.center.x}, ${this.props.center.y})`}>
                            <text y={-10} fontSize={15} fill={'white'} textAnchor='middle'>Total</text>
                            <text y={20} fontSize={30} fill={'white'} textAnchor='middle'>{Math.round(this.getTotal())}</text>
                        </g>
                    </svg>
                </div>
                <div className='summary-column'>
                    <SummaryBox calculations={this.props.calculations} />
                </div>
            </div>);
    }
}

RadialSlider.propTypes = {
    calculations: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired,
    center: React.PropTypes.array.isRequired,
    max: React.PropTypes.number.isRequired
};

RadialSlider.defaultProps = {
    width: 200,
    height: 200,
    radius: 90,
    center: {x: 250, y: 250}
};
