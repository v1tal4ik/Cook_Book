import React,{Component} from 'react';
import CookListItem from '../CookListItem';
import Preloader from '../Preloader';
import {getCookListCounter} from '../../api';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchCookListRequest,changeViewValue,fetchMoreCookListRequest} from '../../modules/actions';
import {
  getIsLoading,
  getTypeSort,
  getViewValue,
  getCookList
  } from '../../modules/reducers';
import './CookList.css';



class CookList extends Component {
  state={
    cookListCounter:0
  }
  componentDidMount=async()=>{
    const {viewValue,typeSort,fetchCookListRequest} = this.props;
    fetchCookListRequest({viewValue,typeSort});
    let count = await getCookListCounter();
    this.setState({cookListCounter:count})
  }

  handleLoadMore=()=>{
    const {viewValue,typeSort,changeViewValue,fetchMoreCookListRequest} = this.props;
    const currentCounter = viewValue+8;
    changeViewValue(currentCounter)
    fetchMoreCookListRequest({viewValue:currentCounter,typeSort});
  }

  render(){
    const {isLoading,cookList} = this.props;
    const {cookListCounter} = this.state;
    return (
      <>
        <div id='cook-list' className='cook-list'>
             { isLoading ? <Preloader /> :
                cookList.map((el)=>{
                  const date = el.date.split('-').reverse().join('.');
                  return <CookListItem key={el.id} id={el.id} name={el.name} date={date} img={el.img} />   
                })
            }
        </div>
        {(cookList.length < cookListCounter && cookList.length) ?
           <div className='more-btn'>
             <button className='btn' onClick={this.handleLoadMore}>load more <i className="fas fa-arrow-down"></i></button> 
         </div>  : null
        }
      </>
    )
  }
}


CookList.propTypes ={
  isLoading:PropTypes.bool.isRequired,
  cookList:PropTypes.array.isRequired,
};

export default connect(state => ({
  isLoading: getIsLoading(state),
  typeSort: getTypeSort(state),
  viewValue: getViewValue(state),
  cookList: getCookList(state)
}), {
  fetchCookListRequest,
  changeViewValue,
  fetchMoreCookListRequest
})(CookList);