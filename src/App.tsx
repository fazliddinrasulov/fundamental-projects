import "./App.css";
// import img1 from "./assets/img/1.png";
import { data } from "./data";

function App() {
  return (
    <main>
      <div className="container">
        <h2 className="title ">fundamental projects</h2>
        <div className=" title-underline" />
        <div className="cart">
          {data.map((item) => {
            return (
              <article key={item.id} className="cart-container">
                <img className="img" src={item.img} alt="" />
                <h5 className="title">{item.title}</h5>
                <a className="btn btn-block">go to github</a>
              </article>
            );
          })}
          {/* <article className="cart-container">
            <img className="img" src={img1} alt="" />
            <h5 className="title">birthday buddy</h5>
            <button className="btn btn-block">go to github</button>
          </article> */}
          {/* <article className="cart-container">
            <img className="img" src={img1} alt="" />
            <h5 className="title">birthday buddy</h5>
            <button className="btn btn-block">go to github</button>
          </article>
          <article className="cart-container">
            <img className="img" src={img1} alt="" />
            <h5 className="title">birthday buddy</h5>
            <button className="btn btn-block">go to github</button>
          </article> */}
        </div>
      </div>
    </main>
  );
}

export default App;
