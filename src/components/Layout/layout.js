import React, { Component } from 'react';
import Home from '../Home_Page/home';
import axios from 'axios';
import Pagination from '../Pagination';
import { connect } from 'react-redux';
import { chart } from '../../Action/action';
export class layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      currentPage: 1,
      loading: true,
      postperPage: 10,
      transation: {}
    };
  }

  componentDidMount = async () => {
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
    let transaction = {};
    // let wi = {};
    // let de = {};
    // let ba = {};

    for (let i = 0; i < y.length; i++) {
      //   de = { deposit: !y[i]['Deposit AMT'] ? 0 : y[i]['Deposit AMT'] };
      //   wi = { withdraw: !y[i]['Withdrawal AMT'] ? 0 : y[i]['Withdrawal AMT'] };
      //   ba = { balance: y[i]['Balance AMT'] };
      console.log('y', y[i]);
      let x1 = new Date(y[i]['Date']);
      x1 = x1.getMonth() + 1;
      console.log('x1', x1)
      let k1 = parseInt(
        !y[i]['Deposit AMT'] ? 0 : y[i]['Deposit AMT'].replace(/,/g, '')
      );
      let k2 = parseInt(
        !y[i]['Withdrawal AMT'] ? 0 : y[i]['Withdrawal AMT'].replace(/,/g, '')
      );
      let k3 = parseInt(y[i]['Balance AMT'].replace(/,/g, ''));
      console.log("k1,k2,k3", k1, k2, k3)
      transaction[x1] = {
        ...transaction[x1],
        'de': k1, 'wi': k2, 'ba': k3
      }
      console.log("transaction", transaction)
    }
    console.log("las ttransaction", transaction)
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
    const currentPosts = this.state.data.slice(indexFirstPost, indexLastPost);
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
                  placeholder='Search'
                  aria-label='Search'
                />
              </div>
            </li>
            <li style={{ marginRight: '30px' }} className='right'>
              <button type='button' className='btn btn-primary'>
                Get Stats of Transactions
              </button>
            </li>
          </ul>
        </nav>
        <div className='container'>
          <Home data={currentPosts} loading={this.state.loading} />
          <Pagination
            postperPage={this.state.postperPage}
            totalPost={this.state.data.length}
            paginate={this.paginate}
          />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    charts_data: y => dispatch(chart(y))
  };
};
export default connect(null, mapDispatchToProps)(layout);
