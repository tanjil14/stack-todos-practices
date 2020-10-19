import React from 'react'
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';

const BulkController=({clearSelected,clearComplete,reset})=>(

    <ButtonGroup>
    <Button color='danger' onClick={clearSelected}>Clear Selected</Button>
    <Button color='danger' onClick={clearComplete}>Clear Complete</Button>
    <Button color='danger' onClick={reset}>Reset</Button>
    </ButtonGroup>
);
BulkController.propTypes={
    clearSelected:PropTypes.func.isRequired,
    clearComplete:PropTypes.func.isRequired,
    reset:PropTypes.func.isRequired
}
export default BulkController;