import * as React from 'react';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
    Paper,
    Checkbox,
    FormControlLabel,
    Switch,
    Button,
    Icon,
    Select,
    MenuItem,
    Link,
    FormControl,
    TextField,
    InputAdornment,
    IconButton,
    InputBase
} from '@mui/material/';

import { Pencil } from '@gravity-ui/icons';

import checkbox_check_table from '../../img/checkbox_check_table.svg';
import checkbox_uncheck_table from '../../img/checkbox_uncheck_table.svg';
import data_contents from '../../utils/temp_const';
import { CollumnContents } from '../../utils/constants';
import EnhancedTableToolbar from '../../ui/TableContents/EnhancedTableToolbar';
import EnhancedTableHead from '../../ui/TableContents/EnhancedTableHead';
import CheckboxFortable from '../../ui/CheckboxForTable/CheckboxForTable';
import SelectForTable from '../../ui/SelectForTable/SelectForTable';
import { DisabledByDefault } from '@mui/icons-material';
import './style.css';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

/*
EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};*/

export default function ContentsTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = data_contents.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    //мое
    const handleClickGaid = (evt) => {
        console.log(`gaid = ${evt.target.checked}`);
    };

    const handleClickTasks = (evt) => {
        console.log(`tasks = ${evt.target.checked}`);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data_contents.length) : 0;

    const visibleRows = React.useMemo(
        () => stableSort(data_contents, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [order, orderBy, page, rowsPerPage]
    );

    const styleCell = {
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '22px',
        color: '#212121'
    };

    // мое
    const [valuePlatform, setValuePlatform] = React.useState('');
    const [valueStatusProfile, setValueStatusProfile] = React.useState('');
    const [stateInputContent, setStateInputContent] = React.useState(false); //состояние инпута в content

    // TODO: сделать полосу прокрутки в блоке только
    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar title="Контент" textCreatButton="Создать форму" />
                <TableContainer sx={{ width: 'max-content' }}>
                    <Table aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={data_contents.length}
                            CollumnContents={CollumnContents}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell padding="checkbox" align="center">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                onClick={(event) => handleClick(event, row.id)}
                                                icon={
                                                    <Icon>
                                                        <img src={checkbox_uncheck_table} />
                                                    </Icon>
                                                }
                                                checkedIcon={
                                                    <Icon>
                                                        <img src={checkbox_check_table} />
                                                    </Icon>
                                                }
                                                inputProps={{
                                                    'aria-labelledby': labelId
                                                }}
                                                sx={{ width: 14 }}
                                            />
                                        </TableCell>
                                        <TableCell id={labelId} scope="row">
                                            {row.date}
                                        </TableCell>
                                        <TableCell scope="row" sx={{ ...styleCell }}>
                                            {row.fio}
                                        </TableCell>
                                        <TableCell scope="row" sx={{ ...styleCell, color: '#6B6872' }}>
                                            <Link
                                                href={`https://t.me/${row.telegram}`}
                                                target="_blank"
                                                underline="none"
                                                sx={{ ...styleCell, color: '#6B6872' }}
                                            >
                                                @{row.telegram}
                                            </Link>
                                        </TableCell>
                                        <TableCell scope="row">
                                            <FormControl fullWidth>
                                                <SelectForTable
                                                    value={valuePlatform} //исправить
                                                    displayEmpty
                                                    onChange={(evt) => console.log('platform = ', evt.target.value)}
                                                >
                                                    <MenuItem value="">
                                                        <em>{row.status_profile}</em>
                                                    </MenuItem>
                                                    <MenuItem value={'Активный'}>Активный</MenuItem>
                                                    <MenuItem value={'Не определен'}>Не определен</MenuItem>
                                                    <MenuItem value={'Уточняется'}>Уточняется</MenuItem>
                                                </SelectForTable>
                                            </FormControl>
                                        </TableCell>
                                        <TableCell scope="row">
                                            <CheckboxFortable defaultChecked={row.gaid} onClick={handleClickGaid} />
                                        </TableCell>
                                        <TableCell scope="row">
                                            <CheckboxFortable defaultChecked={row.tasks} onClick={handleClickTasks} />
                                        </TableCell>
                                        <TableCell scope="row">
                                            <FormControl fullWidth>
                                                <SelectForTable
                                                    value={valuePlatform} //исправить
                                                    displayEmpty
                                                    onChange={(evt) => console.log('platform = ', evt.target.value)}
                                                >
                                                    <MenuItem value="">
                                                        <em>{row.platform}</em>
                                                    </MenuItem>
                                                    <MenuItem value={'Habr'}>Habr</MenuItem>
                                                    <MenuItem value={'YouTube'}>YouTube11111111111111111</MenuItem>
                                                    <MenuItem value={'VK'}>VK</MenuItem>
                                                </SelectForTable>
                                            </FormControl>
                                        </TableCell>
                                        <TableCell scope="row">
                                            <Box
                                                id={`input_content${row.id}`}
                                                component="form"
                                                noValidate
                                                onSubmit={(evt) => { 
                                                    console.log('onSubmit')
                                                    evt.preventDefault()
                                                }
                                            }
                                                onChange={() => console.log('onChange')}
                                                onFocus={() => console.log('focus')}
                                                sx={{
                                                    width: 150,
                                                    height: 28,
                                                    display: 'flex',
                                                    boxSizing: 'border-box',
                                                    border: '1px solid #D5D5D5',
                                                    borderRadius: '8px',
                                                    '&:hover': {
                                                        borderColor: '#A5A5AC',
                                                    },
                                                    '&:disabled': {
                                                        borderColor: 'red',
                                                    },
                                                }}
                                            >
                                                <IconButton
                                                    onClick={() => {
                                                        const input = document.querySelector(`#input_content${row.id}`);
                                                        console.log('родительский компонент', input);
                                                        input.disabled = !input.disabled;
                                                    }}
                                                >
                                                    <Pencil />
                                                </IconButton>
                                                <InputBase
                                                    placeholder="ссылка"
                                                    
                                                    defaultValue={row.content}
                                                    color='red'
                                                    sx={{
                                                        fontFamily: 'Inter',
                                                        fontSize: '12px',
                                                        color: '#212121',
                                                        fontWeight: '400',
                                                        lineHeight: '22px',
                                                        '&:disabled': {
                                                            backgroundColor: '#EDEDED'
                                                        }
                                                    }}
                                                    
                                                    onBlur={() => console.log('onBlur')}
                                                ></InputBase>
                                            </Box>
                                        </TableCell>
                                        <TableCell scope="row">{row.file}</TableCell>
                                        <TableCell>
                                            <Button>Отправить мерч +</Button>
                                        </TableCell>
                                        <TableCell scope="row">{row.number_form}</TableCell>
                                        <TableCell scope="row">{row.number_task}</TableCell>
                                    </TableRow>
                                );
                            })}

                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data_contents.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel control={<Switch checked={dense} onChange={handleChangeDense} />} label="Dense padding" />
        </Box>
    );
}
