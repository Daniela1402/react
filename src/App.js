/* eslint-disable react/jsx-no-undef */
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField"; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  altura: {
    paddingTop: 80,
  },
  textGrande:{
    fontSize: 80,
  }
}));
function App() {
  const classes = useStyles();
  const [ currVal, setCurrVal ] = useState("");
  const [ operator, setOperator ] = useState(null);
  const [ prevVal, setPrevVal ] = useState(null);

  function procesocalculdora(TipoDato, Valor){

    if(TipoDato === "operator") {
      setOperator(Valor);
      setPrevVal(currVal);
      setCurrVal("");
  }
  if(TipoDato === "clear") {
    setCurrVal("");
    setOperator(null);
    setPrevVal(null);
}

if(TipoDato === "porcentaje") {
  setCurrVal(`${parseFloat(currVal) * 0.01}`);
}

if(TipoDato === "number") {
  setCurrVal(`${currVal}${Valor}`);
}

  if(TipoDato === "equal") {
    const current = parseFloat(currVal);
    const previous = parseFloat(prevVal);

    if(operator === "+") {
        setCurrVal(previous + current);
        setOperator(null);
        setPrevVal(null);
    }

    if(operator === "/") {
      setCurrVal(previous / current);
      setOperator(null);
      setPrevVal(null);
  }

    if(operator === "-") {
        setCurrVal(previous - current);
        setOperator(null);
        setPrevVal(null);
    }

    if(operator === "*") {
        setCurrVal(previous * current);
        setOperator(null);
        setPrevVal(null);
    }
}
  }

  return (

    <React.Fragment>
      <CssBaseline />
      <Container fixed className={classes.altura}>
        <Typography component="div" style={{ backgroundColor: '#8088BA', height: '100' }} >
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <form className={classes.root} noValidate autoComplete="off">
                   

                    <TextField id="outlined-basic" fullWidth label="Ingrese un n??mero" className={classes.textGrande} variant="outlined" 
                    value={currVal}/>
                  </form>
                </Paper>
              </Grid>
              <Grid item xs={2}>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="secondary">
                    AC
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="">
                    CE
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    %
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    /
                  </Button>
                </Paper>
              </Grid>

              <Grid item xs={2}>
              </Grid>
              

              <Grid item xs={2}>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="secondary">
                    7
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="">
                    8
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    9
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    *
                  </Button>
                </Paper>
              </Grid>

              <Grid item xs={2}>
              </Grid>
              

              <Grid item xs={2}>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="secondary">
                    4
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="">
                    5
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    6
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    -
                  </Button>
                </Paper>
              </Grid>

              <Grid item xs={2}>
              </Grid>
              

              <Grid item xs={2}>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="secondary">
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="">
                    2
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    3
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    +
                  </Button>
                </Paper>
              </Grid>

              <Grid item xs={2}>
              </Grid>
              
              <Grid item xs={2}>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="secondary">
                    0
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="">
                    .
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    =
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default App;
