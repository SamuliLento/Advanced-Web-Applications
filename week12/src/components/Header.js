import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Header () {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }


    return (
        <AppBar position="static">
            <Toolbar>
                <Button edge="start" color="inherit" component={Link} to="/">
                    {t("Home")}
                </Button>
                <Button edge="start" color="inherit" component={Link} to="/about">
                    {t("About")}
                </Button>
                <Button id="fi" edge="end" color="inherit" onClick={()=> changeLanguage("fi")}>
                    FI
                </Button>
                <Button id="en" edge="end" color="inherit" onClick={()=> changeLanguage("en")}>
                    EN
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
