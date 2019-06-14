import React,{Component} from 'react';
import {Select } from 'antd';
import Rodal from 'rodal';
import AddModal from '../Modal/AddModal';
import { connect } from 'react-redux';
import {
  changeSortType,
  changeViewValue,
  fetchCookListRequest,
  fetchCookListByInputValueRequest
} from '../../modules/actions';
import {getTypeSort,getViewValue} from '../../modules/reducers';
import './antd-select.css';
import 'rodal/lib/rodal.css';
import './TopMenu.css';

const Option = Select.Option;

class TopMenu extends Component {
    state = {
      visible: false,
      inputValue: ''
    }

handleOpenAddModal = () => this.setState({visible: true});

handleChangeInput = (e) => this.setState({inputValue: e.target.value});

handleChangeSortType = (typeSort) => {
    const {viewValue,changeSortType,changeViewValue,fetchCookListRequest} = this.props;

    changeSortType(typeSort);
    changeViewValue(20);
    fetchCookListRequest({typeSort,viewValue});
}

callHandleChangeInput=()=>{
  const {fetchCookListByInputValueRequest,typeSort} = this.props;

  const {inputValue} = this.state;
  fetchCookListByInputValueRequest({inputValue,typeSort});
}

  closeModalAdd=()=>{
  const {typeSort,viewValue,fetchCookListRequest} = this.props;

  fetchCookListRequest({typeSort,viewValue});
  this.setState({visible:false});
}


  render(){
    const w = window.innerWidth / 1.5;
    const h = window.innerHeight / 1.5;

    return (
      <>
        <div className='top-menu'>
                <button className='btn' onClick={this.handleOpenAddModal}>Add</button>
                
                <div className='search-block'>
                    <input className='top-inpt' type='text' placeholder='name...' onChange={this.handleChangeInput}/>
                    <button className='btn' onClick={this.callHandleChangeInput}>search</button>
                </div>
        
                <div className='sort-block'>
                    <span className='sort-block-text'>Sort by</span>
                    <Select 
                        optionFilterProp="children"
                        className = 'sort-select-block'
                        defaultValue = 'Date added(newest)'
                        onChange={this.handleChangeSortType}
                        >
                        <Option key ='newest' value='newest'>Date added(newest)</Option>
                        <Option key ='oldest'  value='oldest'>Date added(oldest)</Option>
                    </Select>
                </div>
        </div>
        <Rodal visible={this.state.visible} onClose={this.closeModalAdd.bind(this)} animation={'slideDown'}	duration={400} width={w} height={h} >
            <AddModal />
        </Rodal>
      </>
    )
  }
}

export default connect(state=>({
  typeSort:getTypeSort(state),
  viewValue:getViewValue(state),
}),{
  changeSortType,
  changeViewValue,
  fetchCookListRequest,
  fetchCookListByInputValueRequest
})(TopMenu);
