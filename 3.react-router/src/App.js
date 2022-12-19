import { Route, Switch } from "react-router-dom";

import AllQuotes from "./pages/quotes-all";
import QuotesDetail from "./pages/quotes-detail";
import NewQuotes from "./pages/new-quotes";

function App() {

  return (
    <div>
      <Switch>
        <Route exact path={"/quotes"}>
          <AllQuotes />
        </Route>
        <Route path={"/quotes/:quotesId"}>
          <QuotesDetail />
        </Route>
        <Route path={"/new-quotes"}>
          <NewQuotes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
