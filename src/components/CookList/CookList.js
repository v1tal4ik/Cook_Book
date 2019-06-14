import React,{Component} from 'react';
import CookListItem from '../CookListItem';
import Preloader from '../Preloader';
import { connect } from 'react-redux';
import {fetchCookListRequest} from '../../modules/actions';
import {
  getIsLoading,
  getTypeSort,
  getInputValue,
  getViewValue,
  getCookList
} from '../../modules/reducers';
import './CookList.css';



class CookList extends Component {
  componentDidMount=()=>{
    const {viewValue,typeSort,fetchCookListRequest} = this.props;
    fetchCookListRequest({viewValue,typeSort});
  }

  render(){
    const {isLoading,cookList} = this.props;
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
      </>
    )
  }
}

export default connect(state => ({
  isLoading: getIsLoading(state),
  typeSort: getTypeSort(state),
  inputValue: getInputValue(state),
  viewValue: getViewValue(state),
  cookList: getCookList(state)
}), {
  fetchCookListRequest
})(CookList);




/*


        {cookList.length > 2 ?
          <div className='more-btn'>
          <button className='btn'>load more <i className="fas fa-arrow-down"></i></button> 
          </div>  : null
        }


*/