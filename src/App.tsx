import React, { useState } from 'react';
import './App.css';
import { getNumbers } from './utils';
import { Pagination } from './components/Pagination';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const total = 42;
// const items = getNumbers(1, total).map(n => `Item ${n}`);

export const App: React.FC = () => {
  const [value, setValue] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);

  const start = currentPage * value - value + 1;
  const end = start + value - 1 < 42 ? start + value - 1 : 42;
  const total = 42;
  const items = getNumbers(start, total).map(n => `Item ${n}`);
  const perPageSelector = [3, 5, 10, 20];

  const visibleItems = items.slice(0, value);

  return (
    <div className="container">
      <h1>Items with Pagination</h1>

      <p className="lead" data-cy="info">
        Page {currentPage} (items {start} - {end} of {total})
      </p>

      <div className="form-group row">
        <div className="col-3 col-sm-2 col-xl-1">
          <select
            data-cy="perPageSelector"
            id="perPageSelector"
            className="form-control"
            value={value}
            onChange={event => {
              setValue(+event.target.value);
              setCurrentPage(1);
            }}
          >
            {perPageSelector.map(selector => (
              <option key={selector} value={selector}>
                {selector}
              </option>
            ))}
            {/* <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option> */}
          </select>
        </div>

        <label htmlFor="perPageSelector" className="col-form-label col">
          items per page
        </label>
      </div>
      <Pagination
        total={total} // total number of items to paginate
        perPage={value} // number of items per page
        currentPage={currentPage} /* optional with 1 by default */
        onPageChange={setCurrentPage}
      />
      {/* <Pagination /> */}
      {/* Move this markup to Pagination */}
      {/* <ul className="pagination">
        <li className="page-item disabled">
          <a
            data-cy="prevLink"
            className="page-link"
            href="#prev"
            aria-disabled="true">
            «
          </a>
        </li>
        <li className="page-item active">
          <a data-cy="pageLink" className="page-link" href="#1">
            1
          </a>
        </li>
        <li className="page-item">
          <a data-cy="pageLink" className="page-link" href="#2">
            2
          </a>
        </li>
        <li className="page-item">
          <a data-cy="pageLink" className="page-link" href="#3">
            3
          </a>
        </li>
        <li className="page-item">
          <a data-cy="pageLink" className="page-link" href="#4">
            4
          </a>
        </li>
        <li className="page-item">
          <a data-cy="pageLink" className="page-link" href="#5">
            5
          </a>
        </li>
        <li className="page-item">
          <a data-cy="pageLink" className="page-link" href="#6">
            6
          </a>
        </li>
        <li className="page-item">
          <a data-cy="pageLink" className="page-link" href="#7">
            7
          </a>
        </li>
        <li className="page-item">
          <a data-cy="pageLink" className="page-link" href="#8">
            8
          </a>
        </li>
        <li className="page-item">
          <a data-cy="pageLink" className="page-link" href="#9">
            9
          </a>
        </li>
        <li className="page-item">
          <a
            data-cy="nextLink"
            className="page-link"
            href="#next"
            aria-disabled="false">
            »
          </a>
        </li>
      </ul> */}
      <ul>
        {visibleItems.map(item => (
          <li key={item} data-cy="item">
            {item}
          </li>
        ))}
      </ul>
      {/* <ul>
        <li data-cy="item">Item 1</li>
        <li data-cy="item">Item 2</li>
        <li data-cy="item">Item 3</li>
        <li data-cy="item">Item 4</li>
        <li data-cy="item">Item 5</li>
      </ul> */}
    </div>
  );
};

export default App;
