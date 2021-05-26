import './HamburgerButton.css'

export const HamburgerButton = ({ drawerHandler}) => {

return (
    <button className="toggle-button" onClick={() => drawerHandler(true)}>
    <div className="toggle-button_line"/>
    <div className="toggle-button_line"/>
    <div className="toggle-button_line"/>
    </button>

)
   
}
