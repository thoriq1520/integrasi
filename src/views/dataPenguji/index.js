import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import {Card, CardHeader, Divider, Grid} from '@material-ui/core';

import {gridSpacing} from '../../store/constant';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        minWidth: 350,
        fontSize:30
    }
});

function createData(no,name, nip, jabatan, grade, jenjang) {
    return {no,name, nip, jabatan, grade, jenjang};
}

const rows = [
    createData(1,'Ujang Subagja', 1234567890, 'SENIOR SPECIALIST II PEMBELAJARAN PENDIDIKAN, PELATIHAN DAN SERTIFIKASI KOMPENTENSI.', 24, 4.0,3.0),
    createData(2,'Amos Pasalli', 1234567890, "SENIOR MANAGER NIAGA DAN PELAYANAN PELANGGAN.", 37, 4.3,4.0),
    createData(3,'Tri Budi Dermawan', 1234567890, "MANAGER UNIT PELAKSANA PENGENDALIAN PEMBANGKITAN PANDAN.", 24, 6.0,5.0),
    createData(4,'Cupcake', 1234567890, 3.7, 67, 4.3,2.0),
    createData(5,'Gingerbread', 1234567890, 16.0, 49, 3.9,5.0)
];

export default function DataPenguji() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div>
                <h1>
                    tambah data
                </h1>

                <form method="post">
                    <label>Nama :</label>
                    <input type="text" name="nama"/>
                    <br/>
                    
                </form>

            </div>
            
        </React.Fragment>
    );
}