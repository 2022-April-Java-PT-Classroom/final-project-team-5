import { Route, Switch } from 'react-router-dom';

import AboutScreen from '../../Pages/about-screen';
import AccountCreateScreen from '../../Pages/account-create-screen';
import AccountScreen from '../../Pages/account-screen';
import AccountUpdateScreen from '../../Pages/account-update-screen';
import EventScreen from "../../Pages/event-screen";
import FAQScreen from '../../Pages/faq-screen';
import ForumScreen from '../../Pages/forum-screen';
import HomeScreen from '../../Pages/home-screen';
import LGBTQScreen from '../../Pages/lgbtq-screen';
import NewsScreen from '../../Pages/news-screen';
import RacialScreen from '../../Pages/racial-screen';
import WomensScreen from '../../Pages/womens-screen';

const AppRouter=()=>{
    
    return(
        <Switch>
            <Route exact path ={"/"} component = {HomeScreen}/>
            <Route exact path={"/news"} component ={NewsScreen}/>
            <Route exact path={"/event"} component={EventScreen}/>
            <Route exact path={"/account/create"} component={AccountCreateScreen}/>
            <Route exact path={"/account/:username"} component={AccountScreen}/>
            <Route exact path={"/account/:username/update"} component={AccountUpdateScreen}/>
            <Route exact path={"/about-screen"} component={AboutScreen}/>
            <Route exact path={"/faq"} component={FAQScreen}/>
            <Route exact path={"/women"} component={WomensScreen}/>
            <Route exact path={"/lgbtq"} component={LGBTQScreen}/>
            <Route exact path={"/racial"} component={RacialScreen}/>
            <Route exact path={"/forum"} component={ForumScreen}/>
        </Switch>
    )
}

export default AppRouter;