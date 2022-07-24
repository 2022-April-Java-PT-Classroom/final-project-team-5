import { Route, Switch } from 'react-router-dom';

import EventScreen from ''
import HomeScreen from '../../Pages/home-screen';
import NewsScreen from '../../Pages/news-screen';
import EventScreen from "../../Pages/event-screen";
import AccountCreateScreen from '../../Pages/account-create-screen';
import AccountScreen from '../../Pages/account-screen';
import AboutScreen from '../../Pages/about-screen';
import FAQScreen from '../../Pages/faq-screen';

const AppRouter=()=>{
    
    return(
        <Switch>
            <Route exact path ={"/"} component = {HomeScreen}/>
            <Route exact path={"/news"} component ={NewsScreen}/>
            <Route exact path={"/event"} component={EventScreen}/>
            <Route exact path={"/account/create"} component={AccountCreateScreen}/>
            <Route exact path={"/account/:user"} component={AccountScreen}/>
            <Route exact path={"/about"} component={AboutScreen}/>
            <Route exact path={"/faq"} component={FAQScreen}/>
        </Switch>
    )
}

export default AppRouter;