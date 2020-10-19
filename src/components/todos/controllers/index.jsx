import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap'
import SearchPanel from './controll-search-panel'
import FilterController from './filter-controller'
import ViewController from './view-controller'
import BulkController from './bulk-controller'
const Controller=({term,handleSearch,toggleForm,handleFilter,view,changeView,clearSelected,clearComplete,reset})=>(
   <div>
   <SearchPanel
   term={term}
   handleSearch={handleSearch}
   toggleForm={toggleForm}
   />

   <Row className='my-3'>
   <Col md={{size:4}}><FilterController handleFilter={handleFilter}/> </Col>
   <Col md={{size:4}}><ViewController view={view} changeView={changeView}/> </Col>
   <Col md={{size:4}} className='d-flex'>
   <div className='ml-auto'><BulkController clearSelected={clearSelected} clearComplete={clearComplete} reset={reset}/></div>
    </Col>
   </Row>
   </div>

);

Controller.propTypes={
    term:PropTypes.string.isRequired,
    view:PropTypes.string.isRequired,
    handleSearch:PropTypes.func.isRequired,
    toggleForm:PropTypes.func.isRequired,
    handleFilter:PropTypes.func.isRequired,
    changeView:PropTypes.func.isRequired,
    clearSelected:PropTypes.func.isRequired,
    clearComplete:PropTypes.func.isRequired,
    reset:PropTypes.func.isRequired
};
export default Controller;

