import * as React from 'react';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
    Checkbox,
    Button,
    Icon,
    Select,
    MenuItem,
    Link,
    FormControl,
    OutlinedInput,
    IconButton,
    InputBase,
    Typography
} from '@mui/material/';

import Chip from '@mui/material/Chip';

import { Pencil } from '@gravity-ui/icons';

import checkbox_check_table from '../../img/checkbox_check_table.svg';
import checkbox_uncheck_table from '../../img/checkbox_uncheck_table.svg';
import data_contents from '../../utils/temp_const';
import { CollumnContents } from '../../utils/constants';
import EnhancedTableToolbar from '../../ui/TableContents/EnhancedTableToolbar';
import EnhancedTableHead from '../../ui/TableContents/EnhancedTableHead';
import CheckboxFortable from '../../ui/CheckboxForTable/CheckboxForTable';
import SelectForTable from '../../ui/SelectForTable/SelectForTable';
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

    //мое
    const handleClickGaid = (evt) => {
        console.log(`gaid = ${evt.target.checked}`);
    };

    const handleClickTasks = (evt) => {
        console.log(`tasks = ${evt.target.checked}`);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

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

    const temp_tasks = [12, 15, 12456];

    // TODO: сделать полосу прокрутки в блоке только
    return (
        <Box sx={{ width: '100%', mb: 2 }}>
            <EnhancedTableToolbar title="Контент" textCreatButton="Создать форму" />
            <TableContainer>
                <Table aria-labelledby="tableTitle" size="small">
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
                                    sx={{ cursor: 'pointer', height: '48px', width: '500px' }}
                                >
                                    <TableCell padding="checkbox" align="center" sx={{ padding: '0px', margin: '0px' }}>
                                        <Checkbox
                                            color="primary"
                                            checked={isItemSelected}
                                            onClick={(event) => handleClick(event, row.id)}
                                            sx={{ width: '14px', height: '14px' }}
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
                                        />
                                    </TableCell>
                                    <TableCell id={labelId} scope="row">
                                        <Typography>{row.date}</Typography>
                                    </TableCell>
                                    <TableCell scope="row">
                                        <Typography sx={{ width: 'max-content' }}>{row.fio}</Typography>
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
                                                value={row.status_profile} //исправить
                                                displayEmpty
                                                onChange={(evt) => console.log('platform = ', evt.target.value)}
                                            >
                                                <MenuItem value="Активный">Активный</MenuItem>
                                                <MenuItem value="Не определен">Не определен</MenuItem>
                                                <MenuItem value="Уточняется">Уточняется</MenuItem>
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
                                                value={row.platform} //исправить
                                                displayEmpty
                                                onChange={(evt) => console.log('platform = ', evt.target.value)}
                                            >
                                                <MenuItem value="Habr">Habr</MenuItem>
                                                <MenuItem value="YouTube">YouTube</MenuItem>
                                                <MenuItem value="VK">VK</MenuItem>
                                            </SelectForTable>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell scope="row">
                                        <Box
                                            id={`input_content_cell${row.id}`}
                                            component="form"
                                            noValidate
                                            onSubmit={(evt) => {
                                                console.log('onSubmit');
                                                evt.preventDefault();
                                            }}
                                            onClick={() => console.log('test')}
                                            onChange={() => console.log('onChange')}
                                            sx={{
                                                width: 150,
                                                height: 28,
                                                display: 'flex',
                                                boxSizing: 'border-box',
                                                border: '1px solid #D5D5D5',
                                                borderRadius: '8px',
                                                '&:hover': {
                                                    borderColor: '#A5A5AC'
                                                }
                                            }}
                                        >
                                            <IconButton
                                                onClick={() => {
                                                    const input = document.querySelector(`#input_content_input${row.id}`);
                                                    input.disabled = !input.disabled;
                                                    const cell = document.querySelector(`#input_content_cell${row.id}`);
                                                    input.disabled
                                                        ? cell.setAttribute('style', 'background-color: #D5D5D5')
                                                        : cell.setAttribute('style', 'background-color: #fff');
                                                }}
                                            >
                                                <Pencil />
                                            </IconButton>
                                            <InputBase
                                                id={`input_content_input${row.id}`}
                                                placeholder="ссылка"
                                                defaultValue={row.content}
                                                onClick={() => console.log('клик по инпуту')}
                                                sx={{
                                                    fontFamily: 'Inter',
                                                    fontSize: '12px',
                                                    color: '#212121',
                                                    fontWeight: '400',
                                                    lineHeight: '22px'
                                                }}
                                                onBlur={() => console.log('onBlur')} //Запускаем сабмит
                                            ></InputBase>
                                        </Box>
                                    </TableCell>
                                    <TableCell scope="row">
                                        <Box
                                            id={`input_file_cell${row.id}`}
                                            component="form"
                                            noValidate
                                            onSubmit={(evt) => {
                                                console.log('onSubmit');
                                                evt.preventDefault();
                                            }}
                                            onChange={() => console.log('onChange')}
                                            sx={{
                                                width: 150,
                                                height: 28,
                                                display: 'flex',
                                                boxSizing: 'border-box',
                                                border: '1px solid #D5D5D5',
                                                borderRadius: '8px',
                                                '&:hover': {
                                                    borderColor: '#A5A5AC'
                                                }
                                            }}
                                        >
                                            <IconButton
                                                onClick={() => {
                                                    const input = document.querySelector(`#input_file_input${row.id}`);
                                                    input.disabled = !input.disabled;
                                                    const cell = document.querySelector(`#input_file_cell${row.id}`);
                                                    input.disabled
                                                        ? cell.setAttribute('style', 'background-color: #D5D5D5')
                                                        : cell.setAttribute('style', 'background-color: #fff');
                                                }}
                                            >
                                                <Pencil />
                                            </IconButton>
                                            <InputBase
                                                id={`input_file_input${row.id}`}
                                                placeholder="ссылка"
                                                defaultValue={row.file}
                                                sx={{
                                                    fontFamily: 'Inter',
                                                    fontSize: '12px',
                                                    color: '#212121',
                                                    fontWeight: '400',
                                                    lineHeight: '22px'
                                                }}
                                                onBlur={() => console.log('onBlur')} //Запускаем сабмит
                                            ></InputBase>
                                        </Box>
                                    </TableCell>
                                    <TableCell scope="row">
                                        <Button
                                            sx={{
                                                width: 'max-content',
                                                backgroundColor: '#FBF9FF',
                                                height: '28px',
                                                borderRadius: '8px',
                                                '&:hover': {
                                                    backgroundColor: '#342DF2',
                                                    color: '#FCFCFC',
                                                    fontWeight: '500'
                                                }
                                            }}
                                            href="/456"
                                            variant="outlined"
                                            fullWidth
                                        >
                                            Отправить мерч +
                                        </Button>
                                    </TableCell>
                                    <TableCell scope="row">
                                        <Typography sx={{ color: '#6B6872', width: '100px' }}>{row.number_form}</Typography>
                                    </TableCell>
                                    <TableCell scope="row">
                                        <FormControl sx={{ m: 1, width: 300 }}>
                                            <Select
                                                id={`number_tasks_select${row.id}`}
                                                value={row.number_task}
                                                onChange={(evt) => console.log(evt.target.value)}
                                                input={<OutlinedInput id={`number_tasks_input${row.id}`} />}
                                                renderValue={(selected) => (
                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                        <Chip
                                                            key={`number_tasks_select${row.id}`}
                                                            label={selected}
                                                            onClick={() => console.log('клик по иконке')}
                                                            sx={{
                                                                backgroundColor: '#FBF9FF',
                                                                border: '1px solid #E1E1F7',
                                                                borderRadius: '8px',
                                                                width: '56px',
                                                                height: '26px',
                                                                fontSize: '14px'
                                                            }}
                                                        />
                                                    </Box>
                                                )}
                                                MenuProps={{
                                                    PaperProps: {
                                                        style: {
                                                            maxHeight: 200,
                                                            width: 152
                                                        }
                                                    }
                                                }}
                                                sx={{
                                                    width: '152px',
                                                    height: '28px',
                                                    fontSize: '14px'
                                                }}
                                            >
                                                <MenuItem value='56'>56</MenuItem>
                                                <MenuItem value='89'>89</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
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
        </Box>
    );
}

/*

<TableCell scope="row" >
                                            <Autocomplete
                                                multiple
                                                limitTags='1'
                                                fullWidth
                                                id="number_tasks"
                                                size="small"
                                                options={top100Films}
                                                openText='test'
                                                //readOnly
                                                getOptionLabel={(option) => option.title}
                                                filterSelectedOptions
                                                sx={{ height: '28px', minWidth: '170px', width: 'max-content', padding: 0, margin: 0 }}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        variant="outlined"
                                                        placeholder='test'
                                                        sx={{ height: '28px', fontSize: '10px', lineHeight: '22px' }}
                                                    />
                                                )}
                                            />
                                    </TableCell>

                                    */
