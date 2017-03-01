import React, {PropTypes} from 'react';
import hexRgb from 'hex-rgb';

export default class SummaryBox extends React.Component {

    render() {
        return (
            <div className='summarybox-container'>
                {this.props.calculations.map((calculation, index) => {

                    return (
                        <div className='summarybox-calc'>
                            <div className='title' style={{backgroundColor: calculation.color}}>
                                <span>CALC {index + 1}</span>
                            </div>
                            <div className='values' style={{color: calculation.color, backgroundColor: `rgba(${hexRgb(calculation.color)}, 0.2`}}>
                                <div>
                                    <div className='header'>Days</div>
                                    <div className='value'>{calculation.value}</div>
                                </div>
                                <div>
                                    <div className='header'>Value</div>
                                    <div className='value'>{calculation.value * calculation.scale}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );

    }
}

SummaryBox.propTypes = {
    calculations: PropTypes.array.isRequired
};
