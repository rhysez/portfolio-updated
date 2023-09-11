import Icon from '@mdi/react';
import { mdiXml } from '@mdi/js';

const Header = (props) => {
    
    const navBarButtons = [
        'About',
        'Skills',
        'Projects',
        'Contact'
    ]

    const navBarButtonsMapped = navBarButtons.map((button, index) => <li key={index} className='nav-button'>{button}</li>)

    return (
        <>
            <div className='header-container'>
                <div className='nav-bar'>
                    <ul className='nav-list'>
                        {navBarButtonsMapped}
                    </ul>
                </div>
                <div className='header'>
                    <div className='header-main'>
                        <h2 className='header-title'>Rhys Hodgson</h2>
                    </div>
                    <Icon className='html-icon' path={mdiXml} size={8.5} />
                </div>
            </div>
        </>
    )
}

export default Header