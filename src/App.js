// 초기 설정 (경로 신경 쓸 것!!)
// npx create-react-app airbnb-clone
                     // airbnb-clone은 그냥 이름
                     // npm install -g
// cd airbnb-clone
// npm start

// https://material-ui.com/
// material-ui 사용을 위한 package
// npm install @material-ui/core
// npm install @material-ui/icons
// cd airbnb-clone
// npm start

// react router 설정
// npm i react-router-dom
// npm i react-router-dom@latest

// firebase 배포 방법
// npm install -g firebase-tools
// firebase login
// firebase init
//              ? Are you ready to proceed? (Y/n) y
//              Hosting: Configure and deploy Firebase Hosting sites
//              미리 프로젝트 만들어놨으면, Use an existing project
//              ? What do you want to use as your public directory? (public) build
//              ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y
//              ? Set up automatic builds and deploys with GitHub? Yes
//              ? File build/index.html already exists. Overwrite? (y/N) y
//              ? Set up the workflow to run a build script before every deploy? Yes
//              ? What script should be run before every deploy? (npm ci && npm run build) npm run build
//              ......
// firebase deploy

import './App.css';
import Home from './js/Home'
import Header from './js/Header'
import Footer from './js/Footer'
import SearchPage from "./js/SearchPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    //BEM
    <div className="App">
      {/* <h1>Let's build AIRBNB clone</h1> */}
      <Router>
        <Header />

        {/* Header와 Footer는 고정하기 위해 */}
        <Switch>
          <Route path='/search'>
            {/* /search */}
            <SearchPage />
          </Route>
          <Route path='/'>
            {/* / */}
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>

      {/* {Home} */}
        {/* {Header} */}

        {/* {Banner} */}
          {/* {Search} */}
        {/* {Cards} */}

        {/* {Footer} */}

      {/* {SearchPage} */}
        {/* {...} */}
    </div>
  );
}

export default App;
