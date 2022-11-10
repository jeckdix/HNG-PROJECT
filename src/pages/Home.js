import React from 'react'
import { connect } from 'react-redux';
import Button from '../components/Button/Button';
import { simpleAction } from '../actions/simpleAction';

const mapStateToProps = state => ({
  ...state
 })
 
 const Home = () => {

  return (
    <>
      <Button label='test' />
    </>
  )
}

export default connect()(Home);
