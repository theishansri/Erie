import React, { Component } from 'react'
import {connect} from 'react-redux';
import Layout from "../Layout/layout"
import {fetch} from '../../Action/action'
import {Link} from 'react-router-dom';
export class Chart extends Component {
    componentDidMount(){
        
    this.props.fetch()
    }
    render() {
        console.log(this.props.data,"sdd")
        return (
            <div>
                <div>
        <nav className='nav-wraper orange lighten-1'>
          <ul>
            <li>
              <div className='md-form mt-0'>
                <input
                  style={{ marginLeft: '353px', width: '492px' }}
                  className='form-control'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
              </div>
            </li>
            <li style={{ marginRight: '30px' }} className='right'>
              <Link to='/'><button type='button' className='btn btn-primary'>
                Home
              </button>
              </Link>
            </li>
          </ul>
        </nav>
        </div>
                {this.props.loading?<h2>Loading...</h2>:"This is Cart"}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        data:state.data,
        loading:state.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
      fetch:()=>dispatch(fetch())
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(Chart)
