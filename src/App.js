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
//              ? Set up automatic builds and deploys with GitHub? n
//              ? File build/index.html already exists. Overwrite? (y/N) n
//              
//              Welcome... Firebase Hostiong Setup Complete가 뜨면 
//              public > index.html과 build > index.html이 잘못됐을 가능성이 있다(실제로 public > index.html이 firebase의 뭔가로 덮여있었음)
//              그렇게 되있으면 다시 예전 public > index.html로 돌리고 다시 시도하면 됌. build > index.html는 npm run build로 다시 돌아갈 수 있음
//              원인은 아마 선택 부분에서 잘못 건드린 것 같다
//
//              ......
// npm run build
// firebase deploy

// 수정 사항 있으면 수정하고 저장한 다음
// npm run build
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
