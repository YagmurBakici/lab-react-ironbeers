import React from "react";

export default function Router() {
  return (
    <div className="browserRouter">
      <BrowserRouter>
        <Switch>
          <Route path="/newbeer/" component={Newbeer} />
          <Route path="/randombeer" component={Randombeer} />
          <Route path="/beers" component={Beers} />
          <Route exact path="/" component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

// Not:
// Switch>

//   <Route exact path="/" component={Home} />
//   <Route path="/detail" component={Detail} />

//   <Route exact path="/functions" component={Functions} />
//   <Route path="/functions/:functionName" component={FunctionDetails} />

// </Switch>
// Then you have to put exact keyword to the Route which it's path is also included by another Route's path.
// For example home path / is included in all paths so it needs to have exact keyword to differentiate it from other paths which start with /.
// The reason is also similar to /functions path. If you want to use another route path like /functions-detail or /functions/open-door which includes /functions in
// it then you need to use exact for the /functions route.
