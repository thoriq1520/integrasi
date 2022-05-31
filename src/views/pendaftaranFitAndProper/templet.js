import * as React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Card, CardContent, CardHeader, Divider, Grid, Typography, Button, TextField, Select, MenuItem, FormControl, Box, InputLabel} from '@material-ui/core';
import {gridSpacing} from '../../store/constant';
import { ReplyOutlined } from '@material-ui/icons';

const PendaftaranFitnProper = () => {
    const [Jenjang, setJenjang] = useState('');
    const [file, setFile] = useState('');
    const [Nip, setNip] = useState('')

    const handleChange= (event) => {
        setJenjang(event.target.value);
    } ;

    const handleChangee= (event) => {
        setFile(event.target.value);
    } ;

    const url= ""
    const [pendaftar, setPendaftar] = useState({
        data : {
          urjab :"",
          Jenis_FitnProper : "",
          date : "",
          proyeksi_jabatan : "",
          jenjang_jabatan : "",
          file_cv: "",
          file_ppt: "",
          pesertas: "",
      }
      })

      const handleSubmit = (e) => {
    
        e.preventDefault();

        console.log(`Form submitted, ${pendaftar}`);    

    }

      useEffect(() => {
        // POST request using axios inside useEffect React hook
        const article = { title: 'React Hooks POST Request Example' };
        axios.post('http://192.168.130.8:1337/api/pengujis/', article)
            .then(response => setPendaftar(response.data.id));
    
    }, []);

    // useEffect(() =>{
    //     const idpengujis = {
    //         id_penguji: this.state.idpenguji
    //     }
    //     axios.post('http://affc-103-100-128-52.ngrok.io/api/pengujis?sort[0]=id_penguji', idpengujis)

    // });

    function submit(e) {
        const idx = setPendaftar.findIndex(object => {
          return Nip === document.getElementById("Nip").value})
        e.preventDefault();
        axios.post(url,{
          data : {
            urjab :document.getElementById("urjab").value,
            Jenis_FitnProper : document.getElementById("fp").value,
            date : document.getElementById("date").value,
            proyeksi_jabatan : document.getElementById("proyeksi").value,
            jenjang_jabatan : document.getElementById("jenjab").value,
            file_cv: "",
            file_ppt: "",
            pesertas: pendaftar[idx].id,
        }
        })
        .then(res=>{
          console.log(res.data)
        })
        document.location.reload(true)
      }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Button href= "../dashboard"  variant="contained" startIcon={<ReplyOutlined/>}  >
                    Kembali
                </Button>
                <Card>
                    {/* <Divider /> */}
                    <CardHeader title={<Typography variant="h5">Input / Updating Pendaftaran Fit & Proper </Typography>} />
                        <form onSubmit={this.handleSubmit}>
                        <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={2} md ={2.2}>
                            <Typography variant = "h5" paddingLeft={3}  display='center' >
                            NIP
                            </Typography> 
                        </Grid>
                        <TextField
                            id="outlined-password-input"
                            label="NIP"
                            type="NIP"
                            autoComplete="current-password"/>
                        <Grid item xs={2} md ={2.2}>
                            <Button variant="contained" md={1} type="submit" onSubmit={this.handleSubmit} >
                            CEK
                            </Button>
                        </Grid>
                    </Grid>
                        </form>
                    
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={2} md ={2.2}>
                            <Typography variant = "h5" paddingLeft={3}  display='center' >
                            Nama
                            </Typography> 
                        </Grid>
                        <TextField
                            id="fullWidth"
                            label="Nama"
                            type="Nama"
                            autoComplete="current-password"
                            />
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={2} md ={2.2}>
                            <Typography variant = "h5" paddingLeft={3}  display='center' >
                            Jabatan
                            </Typography> 
                        </Grid>
                        <TextField
                            id="outlined-password-input"
                            label="Jabatan"
                            type="Jabatan"
                            autoComplete="current-password"/>
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={2} md ={2.2}>
                            <Typography variant = "h5" paddingLeft={3}  display='center' >
                            Date
                            </Typography> 
                        </Grid>
                        <TextField
                            id="outlined-password-input"
                            label=""
                            type="Date"
                            autoComplete="current-password"/>
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={2} md ={2.2}>
                            <Typography variant = "h5" paddingLeft={3}  display='center' >
                            Proyeksi
                            </Typography> 
                        </Grid> 
                        <TextField
                            id="outlined-password-input"
                            label="Proyeksi"
                            type="Proyeksi"
                            autoComplete="current-password"/>
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={2} md ={2.2}>
                            <Typography variant = "h5" paddingLeft={3}  display='center' >
                            Jenjang Jabatan
                            </Typography> 
                        </Grid>
                        <Grid item xs={1} md ={2.2}>
                        <FormControl fullWidth>
                        <InputLabel id = "jenjang" >
                            Jenjang
                        </InputLabel>
                        <Select
                            labelId="jenjang"
                            id="jenjang"
                            value={Jenjang}
                            label="jenjang"
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Manager Atas</MenuItem>
                            <MenuItem value={20}>Manager Menengah</MenuItem>
                            <MenuItem value={30}>Manager Dasar</MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={2} md ={2.2}>
                            <Typography variant = "h5" paddingLeft={3}  display='center' >
                            Jenis Fit & Proper
                            </Typography> 
                        </Grid>
                        <Grid item xs={2} md ={2.2}>
                        <FormControl fullWidth>
                        <InputLabel id = "Jenis Fit & Proper" >
                           Jenis Fit & Proper
                        </InputLabel>
                        <Select
                            labelId="Jenis Fit & Proper"
                            id="Jenis Fit & Proper"
                            value={Jenjang}
                            label="Jenis Fit & Proper"
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Reguler</MenuItem>
                            <MenuItem value={20}>Non Reguler</MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={2} md ={2.2}>
                            <Typography variant = "h5" paddingLeft={3}  display='center' >
                            Pilih Urjab
                            </Typography> 
                        </Grid>
                        <TextField 
                            id="outlined-password-input"
                            label="Uraian Jabatan"
                            type="Uraian Jabatan"
                            autoComplete="current-password"/>
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={2} md ={2.2}>
                            <Typography variant = "h5" paddingLeft={3}  display='center' >
                            Upload PPT
                            </Typography> 
                        </Grid>
                        <FormControl>
                        <InputLabel type="file" onChange={handleChangee}/>
                        <Button variant="contained" md={1} type="submit">Upload</Button>
                        </FormControl>
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={2} md ={2.2}>
                            <Typography variant = "h5" paddingLeft={3}  display='center' >
                            Upload CV
                            </Typography> 
                        </Grid>
                        <FormControl>
                            <InputLabel type="file" onChange={handleChangee}/>
                            <Button variant="contained" md={1} type="submit">Upload</Button>
                        </FormControl>
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={2} md ={2.2}>
                            <Typography variant = "h5" paddingLeft={3}  display='center' >
                            Penguji
                            </Typography> 
                        </Grid>
                        <TextField
                            id="outlined-password-input"
                            label="Penguji"
                            type="Penguji"
                            autoComplete="current-password"/>
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={3} md ={2.2}>
                            <Typography variant = "h5" paddingLeft={3}  display='center' >
                            Pewawancara 1*
                            </Typography> 
                        </Grid>
                        <TextField
                            id="outlined-password-input"
                            label="Pewawancara 1"
                            type="Pewawancara 1"
                            autoComplete="current-password"/>
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={3} md ={2.2}>
                            <Typography variant = "h5" paddingLeft={3}  display='center' >
                            Pewawancara 2*
                            </Typography> 
                        </Grid>
                        <TextField
                            id="outlined-password-input"
                            label="Pewawancara 2"
                            type="Pewawancara 2"
                            autoComplete="current-password"/>
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={3} md ={2.2}>
                            <Typography variant = "h5" paddingLeft={3}  display='center' >
                            Pewawancara 3*
                            </Typography> 
                        </Grid>
                        <TextField
                            id="outlined-password-input"
                            label="Pewawancara 3"
                            type="Pewawancara 3"
                            autoComplete="current-password"/>
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={3} md ={2.2}>
                            <Typography variant = "h5" paddingLeft={3}  display='center' >
                            Pewawancara 4*
                            </Typography> 
                        </Grid>
                        <TextField
                            id="outlined-password-input"
                            label="Pewawancara 4"
                            type="Pewawancara 4"
                            autoComplete="current-password"/>
                    </Grid>
                    <Grid container spacing={1} paddingBottom={3}>
                        <Grid item xs={3} md ={2.2}>
                        <FormControl onSubmit = {handleSubmit}>
                        <InputLabel onChange = {(e) => setPendaftar(e.target.value)} value = {pendaftar}/>
                        <Button variant="contained" md={1} type="submit">Submit</Button>
                        </FormControl> 
                        </Grid>
                    </Grid>
                    
                    

      
                    <CardContent>
                    
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default PendaftaranFitnProper;