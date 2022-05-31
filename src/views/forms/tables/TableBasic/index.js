import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableBasic(){
  const url = "http://192.168.202.8:1337/api/pendaftars?populate[0]=pegawai.jabatan&populate[1]=pegawai.grade&populate[2]=pegawai.jenjang&sort[3]=id_pendaftar"
  const [posts, setPosts] = useState([])
  const [pendaftar, setPendaftar] = useState([])

  useEffect(() =>{
    if(posts.length === 0){
      axios.get(url)
      .then(res => {
        console.log(res)
        setPosts(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
    }

}, [posts])

// function pendaftar(){
//   const idPendaftar = setPendaftar.findIndex (object =>{
//      return nip === document.getElementById 
//   }
    
//     )
// }

    return(
        <TableContainer component={Paper}>  
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
             <TableHead>
              <TableRow>
                <TableCell >No</TableCell>
                <TableCell align="right">Nama</TableCell>
                <TableCell align="right">NIP</TableCell>
                <TableCell align="right">Jabatan</TableCell>
                <TableCell align="right">Grade</TableCell>
                <TableCell align="right">Jenjang</TableCell>
                <TableCell align="right">Foto</TableCell>
              </TableRow>
            </TableHead>
              {posts.map(post => 
                <TableBody>
                  <TableRow>
                    <TableCell>{post.attributes.pegawai.data.id}</TableCell>
                    <TableCell align="right">{post.attributes.pegawai.data.attributes.nama}</TableCell>
                    <TableCell align="right">{post.attributes.pegawai.data.attributes.nip}</TableCell>
                    <TableCell align="right">{post.attributes.pegawai.data.attributes.jenjang.data.attributes.jenjang_jabatan_struktural}</TableCell>
                    {/* <TableCell align="right">{post.attributes.pegawai.data.attributes.grade.data.attributes.nama_grade}</TableCell>
                    <TableCell align="right">{post.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</TableCell> */}
                  </TableRow>
                </TableBody>
                )}
          </Table>
        </TableContainer> 
      
          
            
            
           
         
      
    )
}


export default TableBasic