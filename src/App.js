import './App.css';
import 'fontsource-roboto';
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const columns = [
    //{ field: 'id', headerName: 'ID', width: 25 },
    { field: 'classIcon', headerName: 'Class', flex: 1, 
        renderCell: (params) => 
        {return (<img alt='classIcon' className='classIcon' src={params.value}/>)} },
    { field: 'characterName', headerName: 'Name', width: 150 },
    { field: 'headImage', headerName: 'Head', flex: 1, 
        renderCell: (params) => 
            {return (<><div>{params.row.headLevel}</div><img id='headImage' className='itemIcon' alt='headImage' src={params.value}/></>)}, 
        valueGetter: (params) => 
            `${params.row.headLevel}`},
    { field: 'neckImage', headerName: 'Neck', flex: 1,
        renderCell: (params) => 
            {return (<><div>{params.getValue('neckLevel')}</div><img id='neckImage' alt='neckImage' className='itemIcon' src={params.value}/></>)}, 
        valueGetter: (params) => 
            `${params.getValue('neckLevel')}`},
    { field: 'shoulderImage', headerName: 'Shoulder', flex: 1, 
        renderCell: (params) => 
            {return (<><div>{params.getValue('shoulderLevel')}</div><img id='shoulderImage' alt='shoulderImage' className='itemIcon' src={params.value}/></>)}, 
        valueGetter: (params) => 
            `${params.getValue('shoulderLevel')}`},
    { field: 'chestImage', headerName: 'Chest', flex: 1, 
        renderCell: (params) => 
            {return (<><div>{params.getValue('chestLevel')}</div><img id='chestImage' alt='chestImage' className='itemIcon' src={params.value}/></>)}, 
        valueGetter: (params) => 
            `${params.getValue('chestLevel')}`},
    { field: 'waistImage', headerName: 'Waist', flex: 1, 
        renderCell: (params) => 
            {return (<><div>{params.getValue('waistLevel')}</div><img id='waistImage' alt='waistImage' className='itemIcon' src={params.value}/></>)}, 
        valueGetter: (params) => 
            `${params.getValue('waistLevel')}`},
    { field: 'legsImage', headerName: 'Legs', flex: 1, 
        renderCell: (params) => 
            {return (<><div>{params.getValue('legsLevel')}</div><img id='legsImage' alt='legsImage' className='itemIcon' src={params.value}/></>)}, 
        valueGetter: (params) => 
            `${params.getValue('legsLevel')}`},
    { field: 'feetsImage', headerName: 'Feet', flex: 1, 
        renderCell: (params) => 
            {return (<><div>{params.getValue('feetsLevel')}</div><img id='feetsImage' alt='feetsImage' className='itemIcon' src={params.value}/></>)}, 
        valueGetter: (params) => 
            `${params.getValue('feetsLevel')}`},
    { field: 'wristImage', headerName: 'Wrist', flex: 1, 
        renderCell: (params) => 
            {return (<><div>{params.getValue('wristLevel')}</div><img id='wristImage' alt='wristImage' className='itemIcon' src={params.value}/></>)}, 
        valueGetter: (params) => 
            `${params.getValue('wristLevel')}`},
    { field: 'handsImage', headerName: 'Hands', flex: 1, 
        renderCell: (params) => 
            {return (<><div>{params.getValue('handsLevel')}</div><img id='handsImage' alt='handsImage' className='itemIcon' src={params.value}/></>)}, 
        valueGetter: (params) => 
            `${params.getValue('handsLevel')}`},
    { field: 'finger1Image', headerName: 'Ring', flex: 1, 
        renderCell: (params) => 
            {return (<><div>{params.getValue('finger1Level')}</div><img id='finger1Image' alt='finger1Image' className='itemIcon' src={params.value}/></>)}, 
        valueGetter: (params) => 
            `${params.getValue('finger1Level')}`},
    { field: 'finger2Image', headerName: 'Ring', flex: 1, 
        renderCell: (params) => 
            {return (<><div>{params.getValue('finger2Level')}</div><img id='finger2Image' alt='finger2Image' className='itemIcon' src={params.value}/></>)}, 
        valueGetter: (params) => 
            `${params.getValue('finger2Level')}`},
    { field: 'trinket1Image', headerName: 'Trinket', flex: 1, 
        renderCell: (params) => 
            {return (<><div>{params.getValue('trinket1Level')}</div><img id='trinket1Image' alt='trinket1Image' className='itemIcon' src={params.value}/></>)}, 
        valueGetter: (params) => 
            `${params.getValue('trinket1Level')}`},
    { field: 'trinket2Image', headerName: 'Trinket', flex: 1, 
        renderCell: (params) => 
            {return (<><div>{params.getValue('trinket2Level')}</div><img id='trinket2Image' alt='trinket2Image' className='itemIcon' src={params.value}/></>)}, 
        valueGetter: (params) => 
            `${params.getValue('trinket2Level')}`},
    { field: 'backImage', headerName: 'Cloak', flex: 1, 
        renderCell: (params) => 
            {return (<><div>{params.getValue('backLevel')}</div><img id='backImage' alt='backImage' className='itemIcon' src={params.value}/></>)}, 
        valueGetter: (params) => 
            `${params.getValue('backLevel')}`},
    { field: 'mainWeaponImage', headerName: 'Weapon', flex: 1, 
        renderCell: (params) => 
            {return (<><div>{params.getValue('mainWeaponLevel')}</div><img id='mainWeaponImage' alt='mainWeaponImage' className='itemIcon' src={params.value}/></>)}, 
        valueGetter: (params) => 
            `${params.getValue('mainWeaponLevel')}`},
    { field: 'shieldImage', headerName: 'Shield', flex: 1, 
        renderCell: (params) => 
            {return (<><div>{params.getValue('shieldLevel')}</div><img id='shieldImage' alt='shieldImage' className='itemIcon' src={params.value}/></>)}, 
        valueGetter: (params) => 
            `${params.getValue('shieldLevel')}`},
];

const useStyles = makeStyles(() => ({
    root: {
        //color: 'white',
        '& .MuiDataGrid-root': {
        },
        '& .MuiDataGrid-cell': {
            //flexDirection: 'column',
            //lineHeight: 'normal'
            //textAlign: 'center'
        },
        '& p': {
            //lineHeight: 'normal',
            //margin
        }
    },
  }));

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [rows, setRows] = useState([]);

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
                <p className="title">P A N I C Raid Gear</p>
                <Button className="title" variant="contained">Refresh All Equipment</Button>

                <DataGrid className={classes.root} rows={rows} columns={columns}  autoHeight rowHeight="50" />
            </div>
        );
    }
}

export default App;
