import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../redux/actions';

class Left extends Component {

    componentDidMount() {
        this.props.onGetPosts()
    }

    render() {
        console.log('left', this.props);
        return (
            <div className={'pos'}>
                <p>Left: {this.props.age}</p>
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

const mdtp = dispatch => ({
    onGetPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mdtp)(Left);