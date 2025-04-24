'use client';

import React from 'react';
import {
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    IconButton,
    Chip,
    Stack,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useThemeContext } from './Sidebar';

// Styled components
const StyledSelect = styled(Select)(({ theme }) => ({
    borderRadius: '8px',
    backgroundColor: theme.palette.mode === 'light' ? '#F5F9FA' : '#1A1A1A',
    '&:hover': {
        backgroundColor: theme.palette.mode === 'light' ? '#F0F5F7' : '#252525',
    },
    '& .MuiSelect-select': {
        color: theme.palette.mode === 'light' ? '#454747' : '#FFFFFF',
    },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: '8px',
        backgroundColor: theme.palette.mode === 'light' ? '#F5F9FA' : '#1A1A1A',
        '&:hover': {
            backgroundColor: theme.palette.mode === 'light' ? '#F0F5F7' : '#252525',
        },
    },
    '& .MuiInputLabel-root': {
        color: theme.palette.mode === 'light' ? '#6C7A89' : '#B8C7CC',
    },
    '& .MuiOutlinedInput-input': {
        color: theme.palette.mode === 'light' ? '#454747' : '#FFFFFF',
    },
}));

const FilterChip = styled(Chip)<{ active?: boolean }>(({ theme, active }) => ({
    backgroundColor: active
        ? theme.palette.mode === 'light'
            ? 'rgba(33, 100, 125, 0.1)'
            : 'rgba(33, 100, 125, 0.2)'
        : theme.palette.mode === 'light'
            ? '#F5F9FA'
            : '#1A1A1A',
    color: active
        ? '#267997'
        : theme.palette.mode === 'light'
            ? '#6C7A89'
            : '#B8C7CC',
    '&:hover': {
        backgroundColor: active
            ? theme.palette.mode === 'light'
                ? 'rgba(33, 100, 125, 0.15)'
                : 'rgba(33, 100, 125, 0.25)'
            : theme.palette.mode === 'light'
                ? '#F0F5F7'
                : '#252525',
    },
}));

const FilterTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: '6px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.65rem',
            '& .MuiOutlinedInput-input': {
                padding: '6px 8px',
            },
        },
    },
    '& .MuiInputLabel-root': {
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.65rem',
            transform: 'translate(8px, 8px) scale(1)',
            '&.MuiInputLabel-shrink': {
                transform: 'translate(8px, -6px) scale(0.75)',
            },
        },
    },
}));

interface AppointmentFiltersProps {
    filters: {
        status: string;
        doctor: string;
        dateRange: string;
        search: string;
    };
    onFilterChange: (filters: any) => void;
}

const AppointmentFilters: React.FC<AppointmentFiltersProps> = ({
    filters,
    onFilterChange,
}) => {
    const { mode } = useThemeContext();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (field: string) => (event: any) => {
        onFilterChange({
            ...filters,
            [field]: event.target.value,
        });
    };

    const handleStatusFilter = (status: string) => {
        onFilterChange({
            ...filters,
            status: filters.status === status ? '' : status,
        });
    };

    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: isMobile ? 0.5 : 2,
            mb: isMobile ? 0.8 : 2,
        }}>
            <FilterTextField
                select
                label="Status"
                value={filters.status}
                onChange={handleChange('status')}
                size={isMobile ? "small" : "medium"}
                sx={{ minWidth: isMobile ? '100%' : 120 }}
            >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="upcoming">Upcoming</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="cancelled">Cancelled</MenuItem>
            </FilterTextField>

            <FilterTextField
                select
                label="Doctor"
                value={filters.doctor}
                onChange={handleChange('doctor')}
                size={isMobile ? "small" : "medium"}
                sx={{ minWidth: isMobile ? '100%' : 120 }}
            >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Dr. Michael Williams">Dr. Michael Williams</MenuItem>
                <MenuItem value="Dr. Linda Carter">Dr. Linda Carter</MenuItem>
                <MenuItem value="Dr. John Smith">Dr. John Smith</MenuItem>
            </FilterTextField>

            <FilterTextField
                select
                label="Date Range"
                value={filters.dateRange}
                onChange={handleChange('dateRange')}
                size={isMobile ? "small" : "medium"}
                sx={{ minWidth: isMobile ? '100%' : 120 }}
            >
                <MenuItem value="">All Time</MenuItem>
                <MenuItem value="today">Today</MenuItem>
                <MenuItem value="week">This Week</MenuItem>
                <MenuItem value="month">This Month</MenuItem>
                <MenuItem value="year">This Year</MenuItem>
            </FilterTextField>

            <FilterTextField
                label="Search"
                value={filters.search}
                onChange={handleChange('search')}
                size={isMobile ? "small" : "medium"}
                placeholder="Search appointments..."
                sx={{ minWidth: isMobile ? '100%' : 120 }}
            />
        </Box>
    );
};

export default AppointmentFilters;


