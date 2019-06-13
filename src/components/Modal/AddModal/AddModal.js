import React,{Component} from 'react';
import {addNewCookItem,saveImage} from '../../../api';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import './AddModal.css';

class AddModal extends Component {
  state={
    visible:false,
    message:'',
    name:'',
    date:'',
    description:'',
    img:'/img/no-photo.png'
}

changeInput=(e)=>{
  this.setState({[e.target.name]:e.target.value});
};

async changeInputImage(e){
  let image = e.target.files[0];
  let result = await saveImage(image);
  this.setState({img:result});
}

async handleSave(e){
  const {name,date,description,img} = this.state;
  if(name && date){
      e.preventDefault();
      let id = Math.floor(Math.random()*1000000)
      let obj = {
          id,
          name,
          date,
          description,
          img
      }
      let result = await addNewCookItem(obj);
      this.setState({visible:true,message:result});
  }
}

closeModalMessage=()=>{
  this.setState({
      visible:false,
      message:'',
      name:'',
      date:'',
      description:'',
      img:'/img/no-photo.png'
  });
}

  render(){
    const {name,date,description,img} = this.state;
    return (
      <>
        <form className='add-modal'>
            <div className='add-modal-block'>
                <label className='add-modal-label'>Name *</label>
                <input className='add-modal-inpt' onChange={this.changeInput} name="name" type="text"  value={name} required/>
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

export default AddModal;

