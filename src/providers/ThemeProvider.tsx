'use client';

import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContextProvider, useThemeContext } from '../components/patient/Sidebar';

// Base theme with common settings
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#267997',
        },
        background: {
            default: '#F5F9FA',
            paper: '#ffffff',
        },
        text: {
            primary: '#454747',
            secondary: '#21647D',
        },
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent !important',
                    '&.Mui-focused': {
                        backgroundColor: 'transparent !important',
                    },
                    '& input': {
                        backgroundColor: 'transparent !important',
                        WebkitBoxShadow: 'none !important',
                        boxShadow: 'none !important',
                        '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
                            WebkitBoxShadow: 'none !important',
                            boxShadow: 'none !important',
                            WebkitTextFillColor: 'inherit !important',
                            transition: 'background-color 9999s ease-out, color 9999s ease-out',
                            backgroundColor: 'transparent !important'
                        }
                    }
                },
                input: {
                    '&:-webkit-autofill': {
                        transition: 'background-color 9999s ease-out, color 9999s ease-out',
                        WebkitTextFillColor: 'inherit !important',
                        WebkitBoxShadow: 'none !important',
                        boxShadow: 'none !important',
                        backgroundColor: 'transparent !important'
                    }
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-root': {
                        backgroundColor: 'transparent !important'
                    },
                    '& .MuiInputBase-input': {
                        backgroundColor: 'transparent !important'
                    }
                }
            }
        }
    }
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#267997',
        },
        background: {
            default: '#1A1A1A',
            paper: '#2B2B2B',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#B8C7CC',
        },
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent !important',
                    '&.Mui-focused': {
                        backgroundColor: 'transparent !important',
                    },
                    '& input': {
                        backgroundColor: 'transparent !important',
                        WebkitBoxShadow: 'none !important',
                        boxShadow: 'none !important',
                        '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
                            WebkitBoxShadow: 'none !important',
                            boxShadow: 'none !important',
                            WebkitTextFillColor: 'inherit !important',
                            transition: 'background-color 9999s ease-out, color 9999s ease-out',
                            backgroundColor: 'transparent !important'
                        }
                    }
                },
                input: {
                    '&:-webkit-autofill': {
                        transition: 'background-color 9999s ease-out, color 9999s ease-out',
                        WebkitTextFillColor: 'inherit !important',
                        WebkitBoxShadow: 'none !important',
                        boxShadow: 'none !important',
                        backgroundColor: 'transparent !important'
                    }
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-root': {
                        backgroundColor: 'transparent !important'
                    },
                    '& .MuiInputBase-input': {
                        backgroundColor: 'transparent !important'
                    }
                }
            }
        }
    }
});

// MUI Theme Provider that uses our ThemeContext to determine current theme
const ThemeProviderWithContext = ({ children }: { children: React.ReactNode }) => {
    const { mode } = useThemeContext();
    const currentTheme = mode === 'light' ? lightTheme : darkTheme;

    return (
        <MuiThemeProvider theme={currentTheme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};

// Main ThemeProvider that includes both context and MUI theme
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeContextProvider>
            <ThemeProviderWithContext>
                {children}
            </ThemeProviderWithContext>
        </ThemeContextProvider>
    );
} 