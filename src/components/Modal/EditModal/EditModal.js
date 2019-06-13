import React,{Component} from 'react';
import {updateCookItemById,saveImage} from '../../../api';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import '../AddModal/AddModal.css';

class EditModal extends Component {
  state={
    visible:false,
    message:'',
    id:0,
    name:'',
    date:'',
    description:'',
    img:'/img/no-photo.png'
}

changeInput=(e)=>{
  this.setState({[e.target.name]:e.target.value});
};

componentDidMount(){
    const {id,name,date,description,img} = this.props;
    this.setState({id,name,date,description,img});
}

async changeInputImage(e){
  let image = e.target.files[0];
  let result = await saveImage(image);
  this.setState({img:result});
}

async handleSave(e){
    const {id,name,date,description,img} = this.state;
    const edit = isEdited({date,description,img},this.props);
    if(name && date && edit ){
        e.preventDefault();
        let obj = {
            id,
            name,
            date,
            description,
            img
        }
        let result = await updateCookItemById(obj);
        this.setState({visible:true,message:result});
    }else{
      e.preventDefault();
      this.setState({visible:true,message:'Error! You must edit at least one property!'})
    }

    function isEdited (state,props){
      for(let prop in state){
        if(state[prop] !== props[prop]){
          return true;
        }
      }
    }

  }

closeModalMessage=()=>{
    this.setState({
        visible:false,
        message:'',
        id:0,
        name:'',
        date:'',
        description:'',
        img:'/img/no-photo.png'
    });
    this.props.onClose();
}

  render(){
    const {name,date,description,img} = this.state;
    return (
      <>
        <form className='add-modal'>
            <div className='add-modal-block'>
                <label className='add-modal-label'>Name : {name}</label>
            </div>
            <div className='add-modal-block'>
                <label className='add-modal-label'>Date *</label>
                <input className='add-modal-inpt' onChange={this.changeInput} name="date" type="date" value={date} required/>
            </div>
            <div className='add-modal-block'>
                <img src={img} alt='Load img'/>
                <input className='add-modal-inpt-img' onChange={this.changeInputImage.bind(this)} name="img" type="file" accept="image/*" />
            </div>
            <div className='add-modal-block'>
                <label className='add-modal-label'>Description</label>
                <textarea className="add-modal-inpt-description" onChange={this.changeInput} name="description" type="text" value={description} cols="10" rows="8"></textarea>
            </div>
            <button className='btn modal-btn' onClick={this.handleSave.bind(this)}>Save</button>
        </form>
        <Rodal visible={this.state.visible} animation={'rotate'} onClose={this.closeModalMessage.bind(this)}>
            <div className='modal-message'>{this.state.message}</div>
        </Rodal>
      </>
    )
  }
}

export default EditModal;

