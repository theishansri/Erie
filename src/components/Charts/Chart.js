import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetch } from '../../Action/action'
import { Link } from 'react-router-dom';
import { Bar, Pie,Doughnut } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels';
export class Chart extends Component {
  componentDidMount() {
    this.props.fetch()
  }
  render() {
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const deposit = []
    const withdraw = []
    const balance = []
    for (let i = 0; i < this.props.data.length; i++) {
      if (this.props.data[i] === 0) {
        deposit.push(0)
        withdraw.push(0)
        balance.push(0)
      }
      else {
        deposit.push(this.props.data[i]['de'])
        withdraw.push(this.props.data[i]['wi'])
        balance.push(this.props.data[i]['ba'])
      }

    }
    const pie_data = {
      chartData: {
        labels: month,
        datasets: [{
          data: balance,
          backgroundColor: [
            'rgba(255,99,132,0.6)',
            'rgba(255,199,132,0.6)',
            'rgba(255,0,132,0.6)',
            'rgba(255,99,0,0.6)',
            'rgba(0,99,132,0.6)',
            'rgba(25,99,132,0.6)',
            'rgba(55,9,12,0.6)',
            'rgba(55,29,12,0.6)',
            'rgba(25,299,13,0.6)',
            'rgba(255,76,13,0.6)',
            'rgba(25,53,132,0.6)',
            'rgba(25,12,13,0.6)',
          ],
          hoverBackgroundColor: [
            'rgba(0,99,132,0.6)',
            'rgba(2,199,132,0.6)',
            'rgba(25,0,132,0.6)',
            'rgba(2,99,0,0.6)',
            'rgba(10,99,132,0.6)',
            'rgba(2,99,132,0.6)',
            'rgba(5,9,12,0.6)',
            'rgba(25,29,12,0.6)',
            'rgba(235,299,13,0.6)',
            'rgba(235,76,13,0.6)',
            'rgba(252,53,132,0.6)',
            'rgba(250,12,13,0.6)',
          ]
        }]
      }
    }
    const data_1 = {
      chartData: {
        labels: [...month],
        datasets: [
          {
            label: 'Deposit',
            data: deposit,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: [
              'rgba(255,99,132,0.6)',
              'rgba(255,199,132,0.6)',
              'rgba(255,0,132,0.6)',
              'rgba(255,99,0,0.6)',
              'rgba(0,99,132,0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'

            ],
            hoverBackgroundColor: [
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255,99,132,0.6)',
              'rgba(255,199,132,0.6)',
              'rgba(255,0,132,0.6)',
              'rgba(255,99,0,0.6)',
              'rgba(0,99,132,0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',

            ]
          }
        ]
      }
    }
    const data_2 = {
      chartData: {
        labels: month,
        datasets: [
          {
            label: 'WithDraw',
            data: withdraw,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: [
              'rgba(255,99,132,0.6)',
              'rgba(255,199,132,0.6)',
              'rgba(255,0,132,0.6)',
              'rgba(255,99,0,0.6)',
              'rgba(0,99,132,0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'

            ],
            hoverBackgroundColor: [
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255,99,132,0.6)',
              'rgba(255,199,132,0.6)',
              'rgba(255,0,132,0.6)',
              'rgba(255,99,0,0.6)',
              'rgba(0,99,132,0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',

            ]
          }
        ]
      }
    }

    const bar = (
      <div className="chart col-md-12">
        <Pie data={pie_data.chartData} height={161} options={{
          plugins: {
            datalabels: {
              display: false,

            }
          },
          title: {
            display: true,
            text: 'Balance with Bank For each month',
            fontSize: 25
          },
          legend: {
            display: true,
            position: 'bottom'

          }
        }} />
        <br />
        <Bar data={data_1.chartData} width={20} height={10} options={{
          plugins: {
            datalabels: {
              display: true,
              color: 'white'
            }
          },
          title: {
            display: true,
            text: 'Deposits For each Month In Bank',
            fontSize: 25,
          },
          legend: {
            display: false,
          }
        }}
        />
        <br />
        <Doughnut  data={data_2.chartData} width={20} height={10} options={{
          plugins: {
            datalabels: {
              display: true,
              color: 'white'
            }
          },
          title: {
            display: true,
            text: 'WithDraws For each Month From Bank',
            fontSize: 25,
          },
          legend: {
            display: false,
            position: 'bottom'
          }
        }}
        />

      </div>
    )

    return (
      <div>
        <div>
          <nav className='nav-wraper orange lighten-1'>
            <ul>
              
              <li style={{ marginRight: '30px' }} className='right'>
                <Link to='/'><button type='button' className='btn btn-primary'>
                  Home
              </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container">
          {this.props.loading ? <h2>Loading...</h2> : bar}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
    loading: state.loading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetch())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Chart)
