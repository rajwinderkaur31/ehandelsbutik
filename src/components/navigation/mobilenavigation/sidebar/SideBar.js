import './SideBar.css'

export const SideBar = ({ drawerIsOpen, drawerHandler}) =>  {
    return (
        <nav className={drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
        <h1 onClick={() => drawerHandler(false)}>Exit</h1> 
        <h1>shop</h1>
        <h1>gallery</h1>
        <h1>personal</h1>
        <h1>logout</h1>
        </nav>
    )
    }