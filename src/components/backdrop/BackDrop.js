import './BackDrop.css'

export const BackDrop = ({ drawerHandler, closeDrawer }) => {
    return (
        <div className="backdrop"
        onClick={() => drawerHandler(false)} />
    )
            
        
    
}
