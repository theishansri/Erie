import React from 'react';

function Pagination({ postperPage, totalPost, paginate }) {
  const pagenumber = [];
  for (let i = 1; i <= Math.ceil(totalPost / postperPage); i++) {
    pagenumber.push(i);
  }
  return (
    <div style={{ marginLeft: '115px' }}>
      <nav style={{ background: 'none', borderWidth: '0', boxShadow: 'none' }}>
        <ul className='pagination pagination-md'>
          {pagenumber.map(i => {
            return (
              <li key={i} className='page-item'>
                <button onClick={() => paginate(i)} className='page-link active'>
                  {i}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
