const Header = (props) => {
    
    const navBarButtons = [
        'About',
        'Projects',
        'Contact'
    ]

    const navBarButtonsMapped = navBarButtons.map((button, index) => <li key={index}>{button}</li>)

    return (
        <>
            <div className='header-container'>
                <div className='nav-bar'>
                    <ul className='nav-list'>
                        {navBarButtonsMapped}
                    </ul>
                </div>
                <div className='header-main'>
                    <h2 className='header-title'>Rhys Hodgson.</h2>
                </div>
            </div>
        </>
    )
}

export default Header