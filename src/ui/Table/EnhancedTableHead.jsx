import { Box, TableHead, TableRow, TableCell, TableSortLabel, Checkbox, Icon } from '@mui/material/';
import { visuallyHidden } from '@mui/utils';
import checkbox_check_table from '../../img/checkbox_check_table.svg';
import checkbox_uncheck_table from '../../img/checkbox_uncheck_table.svg';

export default function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, Collumn } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow
                sx={{
                    background: '#F7F7F8'
                }}
            >
                <TableCell
                    padding="checkbox"
                    align="center"
                    sx={{
                        borderBottom: '1px solid #F7F7F8',
                        minWidth: '46px'
                    }}
                >
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
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
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts'
                        }}
                        sx={{ width: '14px' }}
                    />
                </TableCell>
                {Collumn.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align="left"
                        padding="none"
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{
                            borderBottom: '1px solid #F7F7F8',
                            fontFamily: 'Inter',
                            fontWeight: '500',
                            fontSize: '14px',
                            lineHeight: '22px',
                            paddingLeft: '16px',
                            height: '48px',
                        }}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
