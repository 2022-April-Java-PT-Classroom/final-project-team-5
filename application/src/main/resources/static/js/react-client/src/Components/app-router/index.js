import { Route, Switch } from 'react-router-dom';

import AboutScreen from '../../Pages/about-screen';
import Email from "../../Pages/email-us";
import EventScreen from "../../Pages/event-screen";
import FAQScreen from '../../Pages/faq-screen';
import HomeScreen from '../../Pages/home-screen';
import LGBTQScreen from '../../Pages/lgbtq-screen';
import PostScreen from '../../Pages/Post-screen';
import PostsScreen from '../../Pages/posts-screen';
import ProtestScreen from '../../Pages/protest-screen';
import RacialScreen from '../../Pages/racial-screen';
import WomensScreen from '../../Pages/womens-screen';


const AppRouter=()=>{
    
    return(
        <Switch>
            <Route exact path ={"/"} component = {HomeScreen}/>
            <Route exact path={"/events"} component={EventScreen}/>
            <Route exact path={"/about-screen"} component={AboutScreen}/>
            <Route exact path={"/women"} component={WomensScreen}/>
            <Route exact path={"/lgbtq"} component={LGBTQScreen}/>
            <Route exact path={"/racial"} component={RacialScreen}/>
            <Route exact path={"/faq-screen"} component={FAQScreen}/>
            <Route exact path={"/contact-us"}component={Email}/>
            <Route exact path={"/protest"}component={ProtestScreen}/>
            <Route exact path={"/forum"} component={PostsScreen}/>
            <Route exact path={"/post/:id"}><PostScreen /> </Route>
    
        </Switch>
    )
}

export default AppRouter;