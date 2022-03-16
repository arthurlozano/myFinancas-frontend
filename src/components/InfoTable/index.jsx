import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './styles.css'

export function InfoTable() {
  return (
    <div className="container-infoTable">
      <TableContainer sx={{
        background: '#000',
        color: '#fff',
        borderRadius: 10,
      }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#FFF' }} align="center">Data</TableCell>
              <TableCell sx={{ color: '#FFF' }} align="center">Categoria&nbsp;(g)</TableCell>
              <TableCell sx={{ color: '#FFF' }} align="center">Título&nbsp;(g)</TableCell>
              <TableCell sx={{ color: '#FFF' }} align="center">Valor&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ color: '#FFF' }} align="center">10/10/2020</TableCell>
              <TableCell sx={{ color: '#FFF' }} align="center">Receita</TableCell>
              <TableCell sx={{ color: '#FFF' }} align="center">Salario</TableCell>
              <TableCell sx={{ color: '#FFF' }} align="center">R$1000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div >
  )
}






