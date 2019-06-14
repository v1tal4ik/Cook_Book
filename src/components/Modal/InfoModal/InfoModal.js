import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Select } from 'antd';
import './antd-select.css';
import './InfoModal.css';



const Option = Select.Option;

class InfoModal extends Component {
    state = {
        description: '',
        img: ''
    }
    componentDidMount=()=>{
        const {description,img} = this.props;
        this.setState({description:description,img:img})
    }
    handleChangeDateVersion=(e)=>{
        const {versions,description,img} = this.props;
        this.setState({description:description,img:img});

        versions.forEach((el)=>{
            if(el.date===e){
                this.setState({description:el.description,img:el.img});
            }
        });
    }
    
  render(){
      const {id,name,date,versions} = this.props;
    return (
     <div className='info-modal-wrapper'>
        <Select 
            optionFilterProp="children"
            className = 'info-modal-date-select'
            defaultValue = {date}
            onChange={this.handleChangeDateVersion}
            >
            <Option key ={id} value={date}>{date}(newest)</Option>
            {versions.map((item)=>(
                <Option key ={item._id} id={item._id} value={item.date}>{item.date}</Option>
            ))}
        </Select>
        <h3 className='info-modal-title'>{name}</h3>
        <p className='info-modal-description' >{this.state.description}</p>
        <img className='info-modal-img' src={this.state.img} alt={name}/>
     </div>
    )
  }
}


InfoModal.propTypes ={
  id:PropTypes.number.isRequired,
  name:PropTypes.string.isRequired,
  img:PropTypes.string.isRequired,
  versions:PropTypes.array.isRequired,
};

export default InfoModal;
