import { Route, Switch } from 'react-router-dom';

import AboutScreen from '../../Pages/about-screen';
import AccountCreateScreen from '../../Pages/account-create-screen';
import AccountScreen from '../../Pages/account-screen';
import AccountUpdateScreen from '../../Pages/account-update-screen';
import Email from "../../Pages/email-us";
import EventScreen from "../../Pages/event-screen";
import FAQScreen from '../../Pages/faq-screen';
import HomeScreen from '../../Pages/home-screen';
import NewsScreen from '../../Pages/news-screen';

//import Question from '../../Pages/faq-screen/question';

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
            <Route exact path={"/faq-screen"} component={FAQScreen}/>
            <Route exact path={"/email"}component={Email}/>
            {/* <Route exact path={"../question"} component={Question} /> */}
        </Switch>
    )
}

export default AppRouter;