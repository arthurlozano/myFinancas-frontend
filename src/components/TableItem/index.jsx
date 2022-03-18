import { TableCell, TableRow } from "@mui/material"

export const TableItem = ({ data, categoria_id, titulo, valor }) => {
  let dataFormatada = data.split('-').reverse().join('/');
  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell sx={{ color: '#FFF' }} align="center">{dataFormatada}</TableCell>
      <TableCell
        sx={categoria_id === 'Receita' ? { color: '#080', fontWeight: 'bold' } : { color: '#B00', fontWeight: 'bold' }}
        align="center">
        {categoria_id}
      </TableCell>
      <TableCell sx={{ color: '#FFF' }} align="center">{titulo}</TableCell>
      <TableCell
        sx={categoria_id === 'Receita' ? { color: '#080', fontWeight: 'bold' } : { color: '#B00', fontWeight: 'bold' }}
        align="center">
        R${valor}
      </TableCell>
    </TableRow>
  )
}