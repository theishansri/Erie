import React, { Component } from 'react';
export class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  render() {
    let l = (
      <div style={{ marginLeft: '120px', marginRight: '0px' }}>
        {Object.entries(this.props.data).map((key, i) => {
          return (
            <div
              className='card col-sm-10 shadow p-3 mb-5 bg-white rounded '
              style={{ marginTop: '32px', marginLeft: '12px', height: '430px' }}
              key={i}
            >
              <div className='card-body'>
                <h2 className='card-title' style={{ marginTop: '-1px' }}>
                  Account No: {key[1]['Account No']}
                </h2>
                <h4>Customer Name: {key[1]['Transaction Details']}</h4>
                <h4>Transaction Date: {key[1]['Date']}</h4>
                <h5>
                  Withdrawal Amount:{' '}
                  {!key[1]['Withdrawal '] ? 0 : key[1]['Withdrawal ']}
                </h5>
                <h5>
                  Deposit Amount:{' '}
                  {!key[1]['Deposit AMT'] ? 0 : key[1]['Deposit AMT']}
                </h5>
              </div>
              <div className='card-footer'>
                <h6>Balance Amount: {key[1]['Balance AMT']}</h6>
                <h6>Value Date: {key[1]['Value Date']}</h6>
              </div>
            </div>
          );
        })}
      </div>
    );

    return <div>{this.props.loading ? <h2>Loading...</h2> : l}</div>;
  }
}

export default home;
