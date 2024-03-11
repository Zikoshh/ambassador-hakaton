import { useState } from 'react';
import * as React from 'react';
// import { useNavigate } from 'react-router-dom';
//import { useQuery } from 'react-query';
import {
    Box,
    TableContainer,
    TableBody,
    TableRow,
    TableCell,
    Checkbox,
    Icon,
    Typography,
    FormControl,
    Link,
    MenuItem,
    IconButton,
    InputBase,
    Select,
    OutlinedInput,
    Chip,
    Stack,
    Pagination
} from '@mui/material';
import { Pencil } from '@gravity-ui/icons';

import SelectForTable from '../../ui/SelectForTable/SelectForTable';
import CheckboxFortable from '../../ui/CheckboxForTable/CheckboxForTable';
import EnhancedTableToolbar from '../../ui/Table/EnhancedTableToolbar';
import EnhancedTableHead from '../../ui/Table/EnhancedTableHead';

import checkbox_check_table from '../../img/checkbox_check_table.svg';
import checkbox_uncheck_table from '../../img/checkbox_uncheck_table.svg';

import { CollumnProfiles } from '../../utils/constants';
import data_profiles from '../../utils/temp_profiles';

import MainInfo from '../AddNewCard/MenuAmbassador/MainInfo';
import Address from '../AddNewCard/MenuAmbassador/Address';
import Contacts from '../AddNewCard/MenuAmbassador/Contacts';
import ExtraInfo from '../AddNewCard/MenuAmbassador/ExtraInfo';
import Size from '../AddNewCard/MenuAmbassador/Size';
import Promocodes from '../AddNewCard/MenuAmbassador/Promocodes';
import Tasks from '../AddNewCard/MenuAmbassador/Tasks';

import AmbassadorLayout from '../layout/AmbassadorLayout/AmbassadorLayout';

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

const Profiles = () => {
    const [firstModalOpen, setFirstModalOpen] = useState(false);
    const [secondModalOpen, setSecondModalOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const openFirstModal = () => {
        setFirstModalOpen(true);
        setCurrentStep(1);
    };
    const closeFirstModal = () => {
        setFirstModalOpen(false);
        setCurrentStep(1);
    };

    const closeAllModals = () => {
        setFirstModalOpen(false);
        setSecondModalOpen(false);
    };

    const openSecondModal = () => {
        setSecondModalOpen(true);
    };
    const closeSecondModal = () => {
        setSecondModalOpen(false);
    };

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const previousStep = () => {
        setCurrentStep(currentStep - 1);
    };

    // let navigate = useNavigate(); // навигация в react v6

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('date');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const rowsPerPageOptions = [5, 10];
    const isSelected = (id) => selected.indexOf(id) !== -1;

    const visibleRows = React.useMemo(
        () => stableSort(data_profiles, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [order, orderBy, page, rowsPerPage]
    );

    // const handleClickAddProfile = () => {
    //     navigate('/newCard__page1');
    // };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = data_profiles.map((n) => n.id);
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

    const handleClickGaid = (evt) => {
        console.log(`gaid = ${evt.target.checked}`);
    };

    const handleClickOnbording = (evt) => {
        console.log(`gaid = ${evt.target.checked}`);
    };

    /*
    const query = useQuery('todos', getTodos);

    //call READ hook
    const {
        data: profiles = [],
        isError: isErrorProfiles,
        isFetching: isFetchingProfiles,
        isLoading: isLoadingProfiles
    } = useQuery({
        queryKey: ['upds'],
        queryFn: () => {
            return updApi.getUpds();
        }
    });

    //READ hook (get users from api)
    function useGetUpd() {
        return useQuery({
            queryKey: ['upds'],
            queryFn: () => {
                return updApi.getUpds();
            }
        });
    }
*/
    return (
        <Box>
            <Box sx={{ width: '100%', height: '100%', mb: 2 }}>
                <EnhancedTableToolbar title="Профили" textCreatButton="Создать профиль" onClickAdd={openFirstModal} />
            </Box>
            {firstModalOpen && (
                <>
                    {currentStep === 1 && <MainInfo onNext={nextStep} onBack={previousStep} onClose={closeAllModals} />}
                    {currentStep === 2 && <Address onNext={nextStep} onBack={previousStep} onClose={closeFirstModal} />}
                    {currentStep === 3 && <Contacts onNext={nextStep} onBack={previousStep} onClose={closeFirstModal} />}
                    {currentStep === 4 && <ExtraInfo onNext={nextStep} onBack={previousStep} onClose={closeFirstModal} />}
                    {currentStep === 5 && <Size onNext={nextStep} onBack={previousStep} onClose={closeFirstModal} />}
                    {currentStep === 6 && <Promocodes onNext={nextStep} onBack={previousStep} onClose={closeFirstModal} />}
                    {currentStep === 7 && <Tasks onClose={closeFirstModal} onBack={previousStep} />}
                </>
            )}
            <TableContainer>
                <TableContainer aria-labelledby="tableTitle" size="small">
                    <EnhancedTableHead
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={data_profiles.length}
                        Collumn={CollumnProfiles}
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
                                    <TableCell
                                        padding="checkbox"
                                        align="center"
                                        sx={{
                                            minWidth: '46px'
                                        }}
                                    >
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
                                            sx={{ width: '14px' }}
                                        />
                                    </TableCell>
                                    <TableCell id={labelId} scope="row">
                                        <Typography sx={{ color: '#6B6872' }}>{row.date}</Typography>
                                    </TableCell>
                                    <TableCell scope="row">
                                        <FormControl fullWidth>
                                            <SelectForTable
                                                value={row.status_profile} //исправить
                                                displayEmpty
                                                onChange={(evt) => console.log('platform = ', evt.target.value)}
                                                sx={{ minWidth: '152px' }}
                                            >
                                                <MenuItem value="Активный">Активный</MenuItem>
                                                <MenuItem value="Не определен">Не определен</MenuItem>
                                                <MenuItem value="Уточняется">Уточняется</MenuItem>
                                            </SelectForTable>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell scope="row" onDoubleClick={openSecondModal}>
                                        <Typography sx={{ width: 'max-content', color: '#212121' }}>{row.fio}</Typography>
                                    </TableCell>
                                    <TableCell scope="row">
                                        <Link
                                            href={`https://t.me/${row.telegram}`}
                                            target="_blank"
                                            underline="none"
                                            sx={{ color: '#6B6872' }}
                                        >
                                            @{row.telegram}
                                        </Link>
                                    </TableCell>
                                    <TableCell id={labelId} scope="row">
                                        <Typography sx={{ color: '#6B6872' }}>{row.gender}</Typography>
                                    </TableCell>
                                    <TableCell id={labelId} scope="row">
                                        <Typography sx={{ color: '#6B6872', width: 'max-content' }}>{row.programm}</Typography>
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
                                                placeholder="Введите"
                                                defaultValue={row.promocode}
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
                                        <CheckboxFortable defaultChecked={row.onbordig} onClick={handleClickOnbording} />
                                    </TableCell>
                                    <TableCell scope="row">
                                        <CheckboxFortable defaultChecked={row.gaid} onClick={handleClickGaid} />
                                    </TableCell>
                                    <TableCell scope="row">
                                        <FormControl sx={{ m: 1, width: 173 }}>
                                            <Select
                                                id={`number_tasks_select${row.id}`}
                                                value={row.task}
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
                                                <MenuItem value="56">56</MenuItem>
                                                <MenuItem value="89">89</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell scope="row">
                                        <FormControl fullWidth>
                                            <SelectForTable
                                                value={row.status_task}
                                                displayEmpty
                                                onChange={(evt) => console.log('platform = ', evt.target.value)}
                                                sx={{ minWidth: '152px' }}
                                            >
                                                <MenuItem value="Выполнена">Выполнена</MenuItem>
                                                <MenuItem value="В работе">В работе</MenuItem>
                                                <MenuItem value="Назначена">Назначена</MenuItem>
                                            </SelectForTable>
                                        </FormControl>
                                    </TableCell>
                                    {secondModalOpen && <AmbassadorLayout onClose={closeSecondModal} />}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </TableContainer>
            </TableContainer>
            <Stack direction="row" justifyContent={'center'} alignItems={'center'} sx={{ marginTop: '20px' }}>
                <Box display="flex" gap={2} alignItems="center" sx={{ marginRight: '16px' }}>
                    <Typography sx={{ color: '#6B6872', minWidth: 'max-content' }}>Всего {data_profiles.length}</Typography>
                    <FormControl fullWidth>
                        <SelectForTable
                            value={rowsPerPage} //исправить
                            displayEmpty
                            onChange={(evt) => setRowsPerPage(evt.target.value)}
                        >
                            {rowsPerPageOptions.map((options) => {
                                return (
                                    <MenuItem key={options} value={options}>
                                        {options}/страницу
                                    </MenuItem>
                                );
                            })}
                        </SelectForTable>
                    </FormControl>
                </Box>
                <Pagination
                    count={data_profiles.length / rowsPerPage - 1}
                    size="small"
                    variant="outlined"
                    shape="rounded"
                    page={page}
                    onChange={handleChangePage}
                />
                <Box
                    component="form"
                    display="flex"
                    gap={1}
                    justifyContent={'center'}
                    alignItems={'center'}
                    sx={{ marginLeft: '16px' }}
                    noValidate
                    autoComplete="off"
                    onSubmit={(evt) => {
                        evt.preventDefault();
                        setPage(parseInt(page));
                    }}
                >
                    <Typography sx={{ color: '#6B6872', minWidth: 'max-content' }}>Перейти </Typography>
                    <InputBase
                        sx={{ width: '56px', height: '28px', border: '1px solid #C3C3C9', borderRadius: '10px' }}
                        defaultValue={1}
                        onChange={(evt) => {
                            const value = evt.target.value;
                            const quantityPage = data_profiles.length / rowsPerPage - 1;
                            (value > 0) & (value <= quantityPage) ? setPage(parseInt(value), 10) : '';
                        }}
                    />
                </Box>
            </Stack>
        </Box>
    );
};

export default Profiles;
