import React from 'react';
import PropTypes from 'prop-types';
import {Button, Input} from 'reactstrap';

const SearchPanel =({term,handleSearch,toggleForm})=>(
    <div className="d-flex">
    <Input
    placeholder="Enter Search Term"
    className="mr-3"
    value={term}
    onChange={event=>handleSearch(event.target.value)}
    />
    <Button color="success" onClick={toggleForm}>
    New
    </Button>
    </div>
);
SearchPanel.propTypes={
    term:PropTypes.string.isRequired,
    handleSearch:PropTypes.func.isRequired,
    toggleForm:PropTypes.func.isRequired
};
export default SearchPanel;