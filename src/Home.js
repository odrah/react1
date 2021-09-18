import React, { useState } from "react";
import {
        makeStyles, AppBar, Toolbar, Avatar, Select, CardActions,
        CardContent, Card, InputLabel, FormControl, MenuItem,
        Typography, Button, Box, Container, Divider, Grid } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchBar from "material-ui-search-bar";
import ListIcon from '@material-ui/icons/List';


const useStyles = makeStyles((theme) => ({
    spacing: {
        marginTop: 20,
        marginBottom: 12
    },
    boxLayout: {
        maxHeight: 400
    },
    cardHeight: {
        maxWidth: 345,
        maxHeight: 250
    },
    gridContent: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        rowGap: 18
    },
    gridRow: {
        display: "flex",
        flexDirection: "row"
    },
    gridTitleCard: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    container: {
        paddingLeft: 110
    },
    container2: {
        paddingLeft: 110,
        paddingRight: 110,
        paddingTop: 30
    },
    header: {
        paddingTop: 75
    },
    title: {
        paddingLeft: "45%"
    },
    header1: {
        flexGrow: 1
    },
    buttonText: {
        fontSize: 10
    }

}));

function Home() {

    const [value, setValue] = useState("")
    const [responsible, setResponsible] = useState("")
    const [progress, setProgress] = useState("")

    const classes = useStyles();

    function repeatCard() {

        return (
            <Card className={classes.cardHeight}>
                <CardContent >
                    <Grid className={classes.gridTitleCard}>
                        <Typography variant="h6"  >
                            Refatoração in InControl
                        </Typography>
                        <Avatar>N</Avatar>
                    </Grid>

                    <Grid className={classes.gridRow}>
                        <ListIcon style={{ color: "#263579" }} />
                        <Typography variant="body1" component="div">
                            Descrição
                        </Typography>
                    </Grid>

                    <Box overflow='auto' sx={{ maxHeight: 80 }}>
                        <Typography variant="body2">
                            O projeto consiste em refatorar o InControlIO projeto 
                            consiste em refatorar o InControlIO
                            projeto consiste em refatorar o InControlIO projeto 
                            consiste em refatorar o InControlIO,
                            juntamente com os novos requisitos apresentados 
                            pelo cliente na ultima analise
                        </Typography>
                    </Box>

                </CardContent>
                <CardActions>
                    <Button size="meddium" style={{ color: "green" }} >Em Progresso</Button>
                </CardActions>
            </Card>)
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            PD System
                        </Typography>
                        <div className={classes.header1} />
                        <Button className={classes.buttonText} color="inherit" startIcon={<PersonIcon />}>Olá, Usuario</Button>
                        <Button className={classes.buttonText} color="inherit" startIcon={<ExitToAppIcon />}>Sair</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Box className={classes.header}>
                <>
                    <Container maxWidth="fit" className={classes.container}>
                        <Grid className={classes.gridRow} >
                            <Typography style={{ paddingRight: "10px" }} sx={{ flexGrow: 1 }}>
                                Cliente
                            </Typography>
                            <ArrowForwardIosIcon />
                            <Typography style={{ paddingLeft: "10px" }} sx={{ flexGrow: 1 }}>
                                Projetos
                            </Typography>
                        </Grid>
                    </Container>

                    <Divider />
                    <Box sx={{ paddingBottom: 4 }} />

                    <Container className={classes.container2} maxWidth="fit">
                        <Grid className={classes.gridRow} >
                            <SearchBar placeholder="Pesquisar"
                                value={value}
                                onChange={setValue}
                                onRequestSearch={() => console.log("teste")}
                            />
                            <Box sx={{ minWidth: 120, paddingLeft: 24 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Responsavel</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={responsible}
                                        label="Responsavel"
                                        onChange={(event) => setResponsible(event.target.value)}
                                    >
                                        <MenuItem value={1}>Jorge</MenuItem>
                                        <MenuItem value={2}>Marieta</MenuItem>
                                        <MenuItem value={3}>Astolfo</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ minWidth: 120, paddingLeft: 24 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Progresso</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={progress}
                                        label="progress"
                                        onChange={(event) => setProgress(event.target.value)}
                                    >
                                        <MenuItem value={1}>Em Progresso</MenuItem>
                                        <MenuItem value={2}>Pausado</MenuItem>
                                        <MenuItem value={3}>Finalizado</MenuItem>
                                        <MenuItem value={4}>Cancelado</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Divider className={classes.spacing} />

                        <Box overflow='auto' className={classes.boxLayout}>
                            <Grid className={classes.gridContent} >
                                
                                {[...Array(10).keys()].map(item => repeatCard())}

                            </Grid>
                        </Box>
                    </Container>
                </>
            </Box>
        </div>
    )
}

export default Home;