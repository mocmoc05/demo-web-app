import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeNumber } from '../../redux/actions';
import { httpService } from '../../services/httpService';
import { API } from '../../services/APIs';

class Center extends Component {

    async componentDidMount() {

    }

    changeNumber = (e) => {
        e.preventDefault();
        this.props.onChangeNumber(Math.random())
    }

    render() {
        console.log(this.props)
        return (
            <div className={'pos'}>
                <p>Center: {this.props.number}</p>
                <button onClick={this.changeNumber}>Change Number</button>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        number: state.appReducer.number,
    }
}

const mapDispatchToProps = dispatch => ({
    onChangeNumber: (value) => dispatch(changeNumber(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Center)