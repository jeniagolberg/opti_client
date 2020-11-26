import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


function TablePage({movies}) {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([]);


    const getRoi = ({cwg,budget}) => {
        let c = parseInt(cwg.replace(/\D+/g, ''));
        let b = parseInt(budget.replace(/\D+/g, ''));
        
        return c && b ? parseInt((c/b)*100) + "%" : "No Record"
    }

    const parseMovieToTableRow = (movie) => {
        return {
            ...movie,
            roi: getRoi(movie),
            releaseDate: `${movie.releaseDate.day}, ${movie.releaseDate.month} ${movie.releaseDate.year}`
        }
    }
   
    useEffect(() => {
        setRowData(movies.map(movie => parseMovieToTableRow(movie)));
    },[movies])

    return (
        <div className="ag-theme-alpine" style={{ width: "80%" }}>
            <AgGridReact
                rowData={rowData}>  
                <AgGridColumn field="fullName"></AgGridColumn>
                <AgGridColumn field="rating"></AgGridColumn>
                <AgGridColumn field="roi"></AgGridColumn>
                <AgGridColumn field="budget"></AgGridColumn>
                <AgGridColumn field="cwg"></AgGridColumn>
                <AgGridColumn field="releaseDate"></AgGridColumn>
                <AgGridColumn width = "300" field="runtime"></AgGridColumn>
                <AgGridColumn width = "300" field="genres"></AgGridColumn>
            </AgGridReact>
        </div>
    );
}

export default TablePage;