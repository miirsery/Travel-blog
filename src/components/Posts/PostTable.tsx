import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const PostTable = () => {
    function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
        something: number,
        status: string
    ) {
        return { name, calories, fat, carbs, protein, something, status };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 4.1, 'status'),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.1, 'status'),
        createData('Eclair', 262, 16.0, 24, 6.0, 4.1, 'status'),
        createData('Cupcake', 305, 3.7, 67, 4.3, 4.1, 'status'),
        createData('Gingerbread', 356, 16.0, 49, 3.9, 4.1, 'status'),
    ];

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="posts table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">№</TableCell>
                            <TableCell align="center">Тема</TableCell>
                            <TableCell align="center">Опубликован</TableCell>
                            <TableCell align="center">Просмотров</TableCell>
                            <TableCell align="center">Комментариев</TableCell>
                            <TableCell align="center">Исполнитель</TableCell>
                            <TableCell align="center">Статус</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                <TableCell align="right">{row.something}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default PostTable;
