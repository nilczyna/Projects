import { Title } from './Title/title.jsx';
import { Theme } from '../Theme/theme.jsx';
import { title } from './Title/title.module.css';
import { theme } from '../Theme/theme.module.css';
import { header } from './header.module.css';


export const Header = ({ className, onClick, style, children }) => {

    return(
        
        <header className={header} style={style}>

            <Title className={title}> 
                Where in the world?
            </Title>

            <Theme className={theme} onClick={onClick}>
                {children}
            </Theme>

        </header>
    )
}



