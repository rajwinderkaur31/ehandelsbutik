import React, { useContext, useEffect } from 'react'
import { UserContext } from '../shared/provider/UserProvider'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { GalleryView } from '../view/navigationtabviews/GalleryView'
import { NewsView } from '../view/navigationtabviews/NewsView'
import { ShopView } from '../view/navigationtabviews/ShopView'
import { SignInView } from '../view/navigationtabviews/SignInView'
import { ProfileView } from '../view/profiledropdownviews/ProfileView'
import { SettingsView } from '../view/profiledropdownviews/SettingsView'
import { SavedProductsView } from '../view/profiledropdownviews/SavedProductsView'

import RoutingPath from './RoutingPath'
import { ItemDetail } from '../view/ItemDetail'



export const Routes = ({children}) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const blockRouteIfAuthenticated = (navigateToViewIfAuthenticated) => {
        return authenticatedUser ? HomeView : navigateToViewIfAuthenticated
    }
    const authenticatedrequired = (navigateToViewIfAuthenticated)  => {
        return authenticatedUser ? navigateToViewIfAuthenticated : SignInView
    }

    const checkIfUserIsAuthenticated = () => {
        const getLocalStorage = localStorage.getItem('username')
        if (getLocalStorage) {
            setAuthenticatedUser(getLocalStorage)
        }
    }
    useEffect(() => {
        checkIfUserIsAuthenticated()
    })
    
      return (
        
        <BrowserRouter>
       {children}
           <Switch>
               <Route exact path={RoutingPath.galleryView} component={GalleryView}/>
               <Route exact path={RoutingPath.newsView} component={NewsView}/>
               <Route exact path={RoutingPath.shopView} component={ShopView}/>
               <Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView)}/>
               <Route exact path={RoutingPath.settingsView} component={authenticatedrequired(SettingsView)}/>
               <Route exact path={RoutingPath.profileView} component={authenticatedrequired(ProfileView)}/>
               <Route exact path={RoutingPath.savedProductsView} component={authenticatedrequired(SavedProductsView)}/>
               <Route exact path={RoutingPath.itemDetailView} component={ItemDetail}/>
               <Route component= {HomeView}/>
               </Switch> 
        </BrowserRouter>
        
    )
} 
  
