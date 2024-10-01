import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Home = () => {
    const rows=[{EmployeeId:"E101",Name:"John",Department:"Developer",Location:"Kollam"},{EmployeeId:"E102",Name:"Amith",Department:"HR",Location:"TVM"},{EmployeeId:"E103",Name:"tom",Department:"accountant",Location:"kochi"},{EmployeeId:"E104",Name:"jain",Department:"security",Location:"erklm"}]
  return (

  
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell >EMPLOYEE ID</TableCell>
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">DEPARTMENT</TableCell>
            <TableCell align="right">LOCATION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.EmployeeId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.EmployeeId}
              </TableCell>
              {/* <TableCell align="right">{row.EmployeeId}</TableCell> */}
              <TableCell align="right">{row.Name}</TableCell>
              <TableCell align="right">{row.Department}</TableCell>
              <TableCell align="right">{row.Location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}

export default Home