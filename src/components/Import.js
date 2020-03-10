import React from 'react'
import { Button, Table, TableHead, TableBody, 
    TableRow, TableCell } from '@material-ui/core'
import { Container, Paper, Menu, MenuItem } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'


const Import = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleDelete = index => {
        props.deleteMake(index);
        handleClose();
      };

        return (
            <div>
                 <Button variant="contained" color="primary"
                 onClick={props.fetchMakes}>Import</Button>
                <h2>Count: {props.makes.length}</h2>
                
    <Container component={Paper}>
        <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Make</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.makes.map((make, index) => {
                  return (
                <TableRow key={make.MakeId}>
                  <TableCell align="left">{make.MakeId}</TableCell>
                  <TableCell align="left">{make.MakeName}</TableCell>
                  <TableCell align="left">
                  <Button onClick={handleClick}>
                      <MoreVert />
                    </Button>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                      <MenuItem onClick={handleDelete}>Delete</MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
                  );
            })}
            </TableBody>
        </Table>
    </Container>
      )
    }
    
    </div>
        )
    }

export default Import