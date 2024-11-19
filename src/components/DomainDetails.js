import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/webs.json';

const DomainDetails = () => {
  const { domain } = useParams();

  // Find the row for the specific domain
  const rowData = data.find((row) => row.Domain === domain);

  if (!rowData) {
    return <div style={{ textAlign: 'center' }}>No data found for {domain}</div>;
  }

  return (
    <div style={{ width: '80%', margin: '20px auto', textAlign: 'center' }}>
      <h1>Details for {domain}</h1>
      <table
        style={{
          margin: '20px auto',
          borderCollapse: 'collapse',
          width: '50%',
        }}
        border="1"
      >
        <tbody>
          {Object.entries(rowData).map(([key, value]) => (
            <tr key={key}>
              <td style={{ padding: '10px', fontWeight: 'bold' }}>{key}</td>
              <td style={{ padding: '10px' }}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DomainDetails;
