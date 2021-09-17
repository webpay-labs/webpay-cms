// __Routes.tsx__
import { Switch, Route } from "react-router-dom"

// import the Home.tsx component
import { Homepage } from "./views/Homepage"

function Routes (){
   return(
     <Switch>
        <Route path="/" exact component={Homepage}></Route>
     </Switch>
  )
}

export default Routes;