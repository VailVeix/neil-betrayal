import './App.css';
import 'fontsource-roboto';
import React, { useState, useEffect, useCallback } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const itemLevelColors = (itemLevel) => {
    if(itemLevel < 213){
        return "normalItem levelText";
    }
    else if(itemLevel < 226){
        return "heroicItem levelText";
    }
    else{
        return "epicItem levelText";
    }
};

const equipmentCellRenderer = (prefix, params) => {
    {return (<div className="container">
                <img id={prefix + 'Image'} className="itemIcon" alt={prefix + ' Image'} src={params.value}/>
                <div className={itemLevelColors(params.getValue(prefix + 'Level'))}>{params.getValue(prefix + 'Level')}</div>
            </div>)};
};

const columns = [
    //{ field: 'id', headerName: 'ID', width: 25 },
    { field: 'classIcon', headerName: 'Class', flex: 1, 
        renderCell: (params) => {return (<img alt='classIcon' className='classIcon' src={params.value}/>)} },
    { field: 'characterName', headerName: 'Name', width: 150 },
    { field: 'headImage', headerName: 'Head', flex: 1, 
        renderCell: (params) => equipmentCellRenderer("head", params), 
        valueGetter: (params) => 
            `${params.row.headLevel}`},
    { field: 'neckImage', headerName: 'Neck', flex: 1,
        renderCell: (params) => equipmentCellRenderer("neck", params), 
        valueGetter: (params) => 
            `${params.getValue('neckLevel')}`},
    { field: 'shoulderImage', headerName: 'Shoulder', flex: 1, 
        renderCell: (params) => equipmentCellRenderer("shoulder", params),
        valueGetter: (params) => 
            `${params.getValue('shoulderLevel')}`},
    { field: 'chestImage', headerName: 'Chest', flex: 1, 
        renderCell: (params) => equipmentCellRenderer("chest", params),
        valueGetter: (params) => 
            `${params.getValue('chestLevel')}`},
    { field: 'waistImage', headerName: 'Waist', flex: 1, 
        renderCell: (params) => equipmentCellRenderer("waist", params),
        valueGetter: (params) => 
            `${params.getValue('waistLevel')}`},
    { field: 'legsImage', headerName: 'Legs', flex: 1, 
        renderCell: (params) => equipmentCellRenderer("legs", params),
        valueGetter: (params) => 
            `${params.getValue('legsLevel')}`},
    { field: 'feetsImage', headerName: 'Feet', flex: 1, 
        renderCell: (params) => equipmentCellRenderer("feets", params),
        valueGetter: (params) => 
            `${params.getValue('feetsLevel')}`},
    { field: 'wristImage', headerName: 'Wrist', flex: 1, 
        renderCell: (params) => equipmentCellRenderer("wrist", params),
        valueGetter: (params) => 
            `${params.getValue('wristLevel')}`},
    { field: 'handsImage', headerName: 'Hands', flex: 1, 
        renderCell: (params) => equipmentCellRenderer("hands", params),
        valueGetter: (params) => 
            `${params.getValue('handsLevel')}`},
    { field: 'finger1Image', headerName: 'Ring', flex: 1, 
        renderCell: (params) => equipmentCellRenderer("finger1", params),
        valueGetter: (params) => 
            `${params.getValue('finger1Level')}`},
    { field: 'finger2Image', headerName: 'Ring', flex: 1, 
        renderCell: (params) => equipmentCellRenderer("finger2", params),
        valueGetter: (params) => 
            `${params.getValue('finger2Level')}`},
    { field: 'trinket1Image', headerName: 'Trinket', flex: 1, 
        renderCell: (params) => equipmentCellRenderer("trinket1", params),
        valueGetter: (params) => 
            `${params.getValue('trinket1Level')}`},
    { field: 'trinket2Image', headerName: 'Trinket', flex: 1, 
        renderCell: (params) => equipmentCellRenderer("trinket2", params),
        valueGetter: (params) => 
            `${params.getValue('trinket2Level')}`},
    { field: 'backImage', headerName: 'Cloak', flex: 1, 
        renderCell: (params) => equipmentCellRenderer("back", params),
        valueGetter: (params) => 
            `${params.getValue('backLevel')}`},
    { field: 'mainWeaponImage', headerName: 'Weapon', flex: 1, 
        renderCell: (params) => 
            {return params.getValue('mainWeaponLevel') == 0 ?
                <></> : 
                equipmentCellRenderer("mainWeapon", params)}, 
            valueGetter: (params) => 
                `${params.getValue('mainWeaponLevel')}`},
    { field: 'shieldImage', headerName: 'Shield', flex: 1, 
        renderCell: (params) => 
            {return params.getValue('shieldLevel') == 0 ?
             <></> : 
             equipmentCellRenderer("shield", params)}, 
        valueGetter: (params) => 
            `${params.getValue('shieldLevel')}`},
];

const useStyles = makeStyles(() => ({
    root: {
        color: 'white',
        '& .MuiDataGrid-root': {
        },
        '& .MuiIconButton-label': {
            color: 'white',
        },
        '& .MuiDataGrid-sortIcon': {
            color: 'white',
        }
    },
  }));

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [rows, setRows] = useState([]);

    const [isSending, setIsSending] = useState(false);

    const sendRequest = useCallback(async () => {
        if (isSending) return;
        setIsSending(true);
        await fetch("http://vailveix.com/wow_equipment.php", {crossDomain: true})
            .then(res => res.json())
            .then(
            (response) => {
                setIsLoaded(true);
                setRows(response);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
        setIsSending(false);
    }, [isSending]);


    useEffect(() => {
        fetch("http://vailveix.com/wow.php", {crossDomain: true})
          .then(res => res.json())
          .then(
            (response) => {
                setIsLoaded(true);
                setRows(response);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
          )
      }, [])

    const classes = useStyles();

    if(error){
        return <div>Error: {error.message}</div>;
    }
    else if(!isLoaded){
        return <div>Loading...</div>;
    }
    else{
        return (
            <div className="App">
                <div className="title">
                    <h1>P A N I C Raid Gear</h1>
                    <Button size="large" disabled={isSending} onClick={sendRequest} variant="contained">Refresh All Equipment</Button>
                </div>

                <DataGrid className={classes.root} rows={rows} columns={columns} autoHeight rowHeight="55" />
            </div>
        );
    }
}

export default App;
