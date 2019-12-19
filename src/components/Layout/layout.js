import React, { Component } from 'react';
import Home from '../Home_Page/home';
import axios from 'axios';
import Pagination from '../Pagination';
import { connect } from 'react-redux';
import { chart } from '../../Action/action';
import {Link} from 'react-router-dom';
import {fetch} from "../../Action/action"
export class layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      currentPage: 1,
      loading: true,
      postperPage: 10,
      transation: {},
      term:''
    };
  }
  searchingFor=(term)=>{
    return function(x){
      return x['Transaction Details'].toLowerCase().includes(term.toLowerCase())||!term;
    }
  }
  handleChange=(e)=>{
    this.setState({
      term:e.target.value
    }
    )
  }
  componentDidMount = async () => {
    this.props.fetch()
    let x = await axios.get(
      'https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/bankAccount'
    );
    let y = [...x.data];
    this.setState({
      data: y
    });
    this.setState({
      loading: false
    });
    let transaction = new Array(12).fill(0);
    for (let i = 0; i < y.length; i++) {
      let x1 = new Date(y[i]['Date']);
      x1 = x1.getMonth()
      let k1 = parseInt(
        !y[i]['Deposit AMT'] ? 0 : y[i]['Deposit AMT'].replace(/,/g, '')
      );
      let k2 = parseInt(
        !y[i]['Withdrawal AMT'] ? 0 : y[i]['Withdrawal AMT'].replace(/,/g, '')
      );
      let k3 = parseInt(y[i]['Balance AMT'].replace(/,/g, ''));
      if(transaction[x1]===0){
        transaction[x1]={'de':k1,'wi':k2,'ba':k3}
      }
      else{
        transaction[x1]={'de':k1+transaction[x1]['de'],'wi':k2+transaction[x1]['wi']
      ,'ba':k3+transaction[x1]['ba']}
      }
    }
    this.props.charts_data(transaction);
  }

  
  paginate = page => {
    console.log(page);
    this.setState({
      currentPage: page
    });
  };

  render() {
    const indexLastPost = this.state.currentPage * this.state.postperPage;
    const indexFirstPost = indexLastPost - this.state.postperPage;
    let currentPosts;
    let xr;
    if(this.state.term){
      xr=this.state.data.filter(this.searchingFor(this.state.term))
      currentPosts=xr.slice(indexFirstPost,indexLastPost)
    }
    else{
      currentPosts = this.state.data.slice(indexFirstPost, indexLastPost);
    }
    return (
      <div>
        <nav className='nav-wraper orange lighten-1'>
          <ul>
            <li>
              <div className='md-form mt-0'>
                <input
                  style={{ marginLeft: '353px', width: '492px' }}
                  className='form-control'
                  type='text'
                  placeholder='Search By Customer Name'
                  aria-label='Search'
                  onChange={this.handleChange}
                />
              </div>
            </li>
            <li style={{ marginRight: '30px' }} className='right'>
              <Link to='/stats'><button type='button' className='btn btn-primary'>
                Get Stats of Transactions
              </button>
              </Link>
            </li>
          </ul>
        </nav>
        <div className='container'>
          <Home data={currentPosts} loading={this.state.loading} />
          <Pagination
            postperPage={this.state.postperPage}
            totalPost={this.state.term?xr.length:this.state.data.length}
            paginate={this.paginate}
          />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    charts_data: y => dispatch(chart(y)),
    fetch:()=>dispatch(fetch())
  };
};
export default connect(null, mapDispatchToProps)(layout);
