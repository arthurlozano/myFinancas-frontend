import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './styles.css'
import { TableItem } from '../TableItem';

const tableStyle = {
  color: '#BBB',
  backgroundColor: 'transparent',

  backdropFilter: '5px',
  fontWeight: 'bold',
}



export function InfoTable({ listaContas }) {

  return (
    <div className="container-infoTable">
      <TableContainer /*sx={{
        background: '#000',
        color: '#fff',
        borderRadius: 10,
      }} */>
        <Table stickyHeader size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={tableStyle} align="center">Data</TableCell>
              <TableCell sx={tableStyle} align="center">Categoria</TableCell>
              <TableCell sx={tableStyle} align="center">Título</TableCell>
              <TableCell sx={tableStyle} align="center">Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listaContas.length === 0 ? (
              <tr>
                <td style={{ textAlign: 'center', padding: 10 }}>Nenhuma conta encontrada.</td>
              </tr>
            ) : (listaContas.map(conta => (

              <TableItem
                key={conta.id}
                categoria_id={conta.Categorium.descricao}
                data={conta.data}
                valor={conta.valor}
                titulo={conta.titulo} />
            ))
            )}


          </TableBody>
        </Table>
      </TableContainer>
    </div >
  )
}






