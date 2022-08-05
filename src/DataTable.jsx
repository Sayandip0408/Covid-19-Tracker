import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function DataTable() {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            <div className='container mt-5'>
                <div className='main-heading'>
                    <h1 className='mb-5 text-center'> <span className='font-weight-bold'> INDIA </span> COVID-19 Dashboard</h1>
                </div>
                <div className='table-responsive tbl'>
                    <table className='table table-striped table-hover text-center cursor'>
                        <thead className='table-dark'>
                            <tr>
                                <th className='text-start'>States</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((curElem, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <th className='text-start'>{curElem.state}</th>
                                            <td className='value'>{curElem.confirmed}</td>
                                            <td className='recover-hover'>{curElem.recovered}</td>
                                            <td className='death-hover'>{curElem.deaths}</td>
                                            <td className='value'>{curElem.active}</td>
                                            <td>{curElem.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default DataTable;
