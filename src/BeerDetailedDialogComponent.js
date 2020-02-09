import React from 'react';
import _ from 'lodash';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
function flattern(obj1,arr=[],level=0,parentkey=''){ 
    _.flatMapDeep(obj1,(obj,key)=>{
         if(_.isObject(obj) && !_.has(obj,'value') && !_.has(obj,'unit')){
                flattern(obj,arr,level+1,typeof key=='number'?parentkey:key);
         }
        else {
              if(_.isObject(obj) && _.has(obj,'value') && _.has(obj,'unit')&& level){ 
                    arr.push(`${key}:${obj.value} ${obj.unit}`); 
                }else{
                    arr.push(`${key}:${obj}`);    
            }
        }
     });
     return arr;
}
const BeerDetailedDialogComponent=({handleClose, open, selectedBeer, ...props})=>{
    const classes=useStyles();
    const beerDetails =_.omit(selectedBeer,['id',
                                                'image_url',
                                                'ingredients',
                                                'method',
                                                'extendDetail',
                                            ]);
    const beerDetailsToArray = [];
    !_.isEmpty(beerDetails) && _.map(beerDetails,(value,name)=>beerDetailsToArray.push({name,value}));
                            
    let key=0;
    return (
        <Dialog
            fullWidth={true}
            maxWidth='lg'
            open={open}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title" >
            <DialogTitle id="max-width-dialog-title">Detail Of {selectedBeer.name}</DialogTitle>
            <DialogContent>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            {!_.isEmpty(beerDetails) && beerDetailsToArray.map(row=>(
                                <TableRow key={key}>
                                    <TableCell component="th" scope="row">
                                    {_.startCase(_.toLower(row.name.split('_')))}
                                    </TableCell>
                                    <TableCell align="left">
                                        {/**
                                         * Given line to handle value if it is object or array or string
                                         */}
                                        {(typeof row.value==='object' && (("unit" in row.value && row.value.value+' '+row.value.unit)
                                        ||_.join(row.value,', ')))
                                        ||row.value}
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow key="ingredients">
                                <TableCell component="th" scope="row">Ingredients</TableCell>
                                {_.join(flattern(selectedBeer.ingredients),'/')}
                            </TableRow>
                            <TableRow key="method">
                                <TableCell component="th" scope="row">Method</TableCell>
                                {_.join(flattern(selectedBeer.method),'/')}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Close
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default BeerDetailedDialogComponent;