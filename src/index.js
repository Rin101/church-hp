import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Container() {


  return (
    <div className="container">
      <header>
        <h1>大泉ベテル教会</h1>
        <div className="header-line"></div>
        <nav>
          <ul>
            <li><a href="/">ホーム</a></li>
            <li><a href="/">集会案内</a></li>
            <li><a href="/">アクセス</a></li>
            <li><a href="/">教会の沿革</a></li>
          </ul>
        </nav>
      </header>
      <div className="header-image">
        <p>「16神はそのひとり子を賜わったほどに、<br></br>この世を愛して下さった。<br></br>それは御子を信じる者がひとりも滅びないで、<br></br>永遠の命を得るためである。」<br></br>（ヨハネによる福音書3章16節）</p>
      </div>
      <div className="border"></div>
      <div className="information-container">
        <h2>インフォメーション</h2>
        <div className="information-border"></div>
        <div className="information">
          <p className="news-date">2020/12/21</p>
          <p className="news-title">12月22日（日）子どもクリスマス礼拝</p>
          <p className="news-content">9時30分　子供クリスマス礼拝が開かれます。おはなし　「東の国の星占い」　関本　友</p>
        </div>
      </div>
      <div className="border"></div>
      <footer>
        <div>
          <ul>
            <li><a href="/"></a></li>
            <li><a href="/"></a></li>
          </ul>
        </div>
        <p>©2021 Rintaro</p>
      </footer>
    </div>
  )
}


// ================================

class App extends React.Component {
  render() {
    return(
      <div className="app">
        <Container />
      </div>
    )
  }
}

// ==============================

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
