import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Pagination from './Pagination';
import { useNavigate } from 'react-router-dom';
import data from '../data/webs.json';

const HomePage = () => {
  const [gridData, setGridData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 100;
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate one million rows by duplicating the existing data
    const expandedData = [];
    for (let i = 0; i < 1000; i++) {
      expandedData.push(
        ...data.map((row, index) => ({
          ...row,
          Rank: i * data.length + index + 1, // Adjust Rank to simulate unique rows
        }))
      );
    }
    setGridData(expandedData);
  }, []);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = gridData.slice(startIndex, startIndex + rowsPerPage);
  const totalPages = Math.ceil(gridData.length / rowsPerPage);

  const columnDefs = [
    { field: 'Rank', sortable: true, filter: true },
    {
      field: 'Domain',
      sortable: true,
      filter: true,
      cellRendererFramework: (params) => (
        <button
          onClick={() => navigate(`/domain/${params.value}`)}
          style={{
            background: 'none',
            border: 'none',
            color: '#007bff',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          {params.value}
        </button>
      ),
    },
  ];

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <div
        className="ag-theme-alpine"
        style={{ height: '500px', width: '100%' }}
      >
        <AgGridReact
          rowData={currentData} // Pass only current page's data
          columnDefs={columnDefs}
          pagination={false} // Disable AG Grid's built-in pagination
          domLayout="autoHeight"
        />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default HomePage;
