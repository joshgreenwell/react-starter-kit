/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { Card, CardContent, TextField, Grid, Button } from 'material-ui';
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.css';

class Contact extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  state = {};

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <Card>
            <CardContent>
              <form noValidate autoComplete="off">
                <Grid container spacing={24}>
                  <Grid item xs={4} />
                  <Grid item xs={4}>
                    <TextField
                      id="name"
                      label="Name"
                      onChange={this.handleChange('name')}
                      margin="normal"
                      className={s.textField}
                    />
                  </Grid>
                  <Grid item xs={4} />
                  <Grid item xs={4} />
                  <Grid item xs={4}>
                    <TextField
                      id="email"
                      label="Email"
                      onChange={this.handleChange('email')}
                      margin="normal"
                      className={s.textField}
                    />
                  </Grid>
                  <Grid item xs={4} />
                  <Grid item xs={4} />
                  <Grid item xs={4}>
                    <TextField
                      id="phone"
                      label="Phone Number"
                      onChange={this.handleChange('phone')}
                      margin="normal"
                      className={s.textField}
                    />
                  </Grid>
                  <Grid item xs={4} />
                  <Grid item xs={3} />
                  <Grid item xs={6}>
                    <TextField
                      id="message"
                      label="Message"
                      multiline
                      rowsMax="4"
                      onChange={this.handleChange('message')}
                      margin="normal"
                      className={s.textField}
                    />
                  </Grid>
                  <Grid item xs={3} />
                  <Grid item xs={5} />
                  <Grid item xs={2} center>
                    <Button variant="raised" className={s.button}>Submit</Button>
                  </Grid>
                  <Grid item xs={5} />
                </Grid>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Contact);
