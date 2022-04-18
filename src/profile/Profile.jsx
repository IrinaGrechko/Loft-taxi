import React from 'react'
import {connect} from 'react-redux';
import {registration} from '../actions';
import {Typography, Paper, Grid, ButtonBase, Box, TextField} from '@mui/material'

export class Profile extends React.Component{

  save = (event) => {
    event.preventDefault();
    const {cardNumber, cardDate, cardName, cardCode} = event.target;
    const cardInfo = {
      cardNumber: cardNumber.value,
      cardDate: cardDate.value,
      cardName: cardName.value,
      cardCode: cardCode.value
    };
    this.props.registartion(cardInfo);
  }

  render() {
    return (<>
      <Paper elevation={6} p={6} sx={{justifyContent:'center', alignItems: 'center'}}>
        <Typography variant="h4" p={1} align='center' gutterBottom component="h1">
          Профиль
        </Typography>
        <Typography variant="subtitle1" align='center' gutterBottom component="p">
          Способ оплаты
        </Typography>
        <form onSubmit={this.save}>
          <Grid container rowSpacing={2} justifyContent="center"
                alignItems="center">
            <Grid item xs={12}>
              <Grid container derection="row">
                <Grid item xs={6} p={3}>
                  <Paper elevation={3}>
                    <Box sx={{height: '100%', display: 'flex', flexDirection: 'column',
                      p: 4, justifyContent: 'space-around'}}>
                      <TextField id="cardNumber" name="cardNumber" label="Номер карты" variant="standard" />
                      <TextField id="cardDate" name="cardDate" label="Дата" variant="standard" />
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={6} p={3}>
                  <Paper elevation={3}>
                    <Box sx={{height: '100%', display: 'flex', flexDirection: 'column',
                      p:4, justifyContent: 'space-around'}}>
                      <TextField id="cardName" name="cardName" label="Имя владельца" variant="standard" />
                      <TextField id="cardCode" name="cardCode" label="CVC" variant="standard" />
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item justifyContent="center" p={4}>
              <ButtonBase type="submit" p={2}>Сохранить</ButtonBase>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>)
  }
};

export const ProfileWithAuth = connect(null, {registration})(Profile);
