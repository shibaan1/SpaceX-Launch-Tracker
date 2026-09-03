import React from 'react'
import './Filter.css'

const Filters = ({ selectedYear, selectedStatus, onYearChange, onStatusChange }) => {

  return (
    <div className='filter'>
      <select className='year-filter' name="" id="YEAR" value={selectedYear} onChange={(e) => onYearChange(e.target.value)}>
        <option value="All">Year</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>

      </select>

      <select className='status-filter' name="" id="STATUS" value={selectedStatus} onChange={(e) => onStatusChange(e.target.value)}>
        <option value="All">Status</option>
        <option value="success">Success</option>
        <option value="failed">Failed</option>

      </select>

    </div>
  )
}

export default Filters
