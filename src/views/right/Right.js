import React, { Component } from 'react';
import { connect } from 'react-redux';

class Right extends Component {

    render() {
        console.log('right', this.props);
        return (
            <div className={'pos'}>
                <p>Right: {this.props.age}</p>
                <p>{this.props.number}</p>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        age: state.leftRightReducer.age,
        number: state.appReducer.number,
    }
}
export default connect(mapStateToProps)(Right);
