import { Outlet } from "react-router-dom"
import Navbar from "../../Components/Navbar"
import {theme} from '../../Theme.js';
import { ThemeProvider } from '@mui/material/styles';

export default function Template() {


    return(
        <ThemeProvider theme={theme}>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </ThemeProvider>
    )   
}