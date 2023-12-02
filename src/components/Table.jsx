import React from 'react';

const tabledata = [
  {
    year: '2022-23',
    offers: '100',
    package_range: '3-7.5',
    placement: '20',
    range: '7.5',
  },
  {
    year: '2022-23',
    offers: '100',
    package_range: '3-7.5',
    placement: '20',
    range: '7.5',
  },
  {
    year: '2022-23',
    offers: '100',
    package_range: '3-7.5',
    placement: '20',
    range: '7.5',
  },
  {
    year: '2022-23',
    offers: '100',
    package_range: '3-7.5',
    placement: '20',
    range: '7.5',
  },
  {
    year: '2022-23',
    offers: '100',
    package_range: '3-7.5',
    placement: '20',
    range: '7.5',
  },
];

function Table() {
  return (
    <div className="table-responsive w-[800px] lg:w-full">
      <table className="table  text-center table-striped table-hover w-full overflow-scroll">
        <thead>
          <tr className='text-lg lg:text-2xl'>
            <th scope="col" >Year</th>
            <th scope="col">No. of offers</th>
            <th scope="col">Package range</th>
            <th scope="col">placement opportunities</th>
            <th scope="col">Highest range</th>
          </tr>
        </thead>
        <tbody>
          {tabledata.map((item) => (
            <tr className="text-lg lg:text-2xl" key={item.year}>
              <th className="p-4 " scope="row">
                {item.year}
              </th>
              <td className="p-4">{item.offers} +</td>
              <td className="p-4">{item.package_range} LPA</td>
              <td className="p-4">{item.placement} +</td>
              <td className="p-4">{item.range} LPA</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
