import React,{Component} from 'react';
import Rodal from 'rodal';
import InfoModal from '../Modal/InfoModal';
import EditModal from '../Modal/EditModal';
import { connect } from 'react-redux';
import {fetchCookListRequest} from '../../modules/actions';
import {getCookList,getTypeSort,getViewValue} from '../../modules/reducers';
import  './CookListItem.css';



class CookListItem extends Component{
    state = {
        visible: false,
        mode: '',
        id: 0,
        name: '',
        date: '',
        img: '',
        description: '',
        versions: []
    }


    handeShowRecipe=(id)=>{
        const {cookList} = this.props;
        cookList.forEach((el)=>{
            if(el.id===id){
                this.setState({visible:true,mode:'recipe',...el});
            }
        });
    }

    handeOpenEditModal=(id)=>{
        const {cookList} = this.props;
        cookList.forEach((el)=>{
            if(el.id===id){
                this.setState({visible:true,mode:'edit',...el});
            }
        });
    }


    handleCloseModal=()=>this.setState({visible:false});

    handleCloseEditModal=()=>{
        this.setState({visible:false});
        const {viewValue,typeSort,fetchCookListRequest} = this.props;
        fetchCookListRequest({viewValue,typeSort});
    }


    render(){
        const w = window.innerWidth / 1.4;
        const h = window.innerHeight / 1.2;

        const {id,name,date,img} = this.props;
        return (
            <>
                <div className='cook-list-item'>
                    <p id='name' className='cook-list-name'>{name}</p>
                    <p id='date' className='cook-list-name'>({date})</p>
                    <img id='img' className='cook-list-img' src={img} alt={name} />
                    <button className='btn' onClick={()=>{this.handeShowRecipe(id)}} > recipe </button>
                    <button className='btn yellow' onClick={()=>{this.handeOpenEditModal(id)}}><i className="fas fa-pencil-alt"></i></button>
                </div>
                {this.state.visible ?
                    <Rodal visible={this.state.visible} onClose={this.handleCloseModal.bind(this)} animation={'rotate'}	duration={400} width={w} height={h} >
                        {this.state.mode === 'recipe' ?
                         <InfoModal {...this.state} /> :
                        <EditModal {...this.state} onClose={this.handleCloseEditModal.bind(this)} />   
                        }
                    </Rodal>
                :null}
            </>
        )
    }
}

export default connect(state => ({
    cookList: getCookList(state),
    typeSort: getTypeSort(state),
    viewValue: getViewValue(state),
}), {
    fetchCookListRequest
})(CookListItem);
