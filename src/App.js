import React, { PureComponent } from "react";

import "./App.css";
import Header from "./components/header";
import getData from "./components/api";

class App extends PureComponent {
  state = {
    data: []
  };

  async componentDidMount() {
    this.setState({ data: await getData() });
  }

  render() {
    if (!this.state.data.length) {
      return <p>loading....</p>;
    }
    return (
      <div className="main">
        <Header />
        <div className="images">
          {this.state.data.map(link => (
            <ul>
              <li key={link.id}>
                <p>{link.title}</p>
                <img
                  src={`https://farm${link.farm}.staticflickr.com/${
                    link.server
                  }/${link.id}_${link.secret}_s.jpg`}
                />
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

// class App extends Component {
//   state = {
//     picArr: [],
//     titles: []
//   };

//   api_call = async () => {
//     // let picArr = [];
//     // let titles = [];

//     const getPics = await fetch(`${flickr}`);
//     const data = await getPics.json();
//     await data.photos.photo.map(image => {
//       // titles = titles.push(image.title);
//       // picArr = picArr.push(
//       let title = `${image.title}`;
//       let srcPath = `https://farm${image.farm}.staticflickr.com/${
//         image.server
//       }/${image.id}_${image.secret}_s.jpg$`;

//       // );
//       // picArr.push(srcPath);
//       this.setState({ picArr: srcPath, titles: title });
//     });
//   };

//   componentDidMount() {
//     this.api_call();
//   }

//   render() {
//     console.log(this.state);
//     return (
//       <div className="App">
//         <Header />
//         <div className="images">
//           <ul>
//             {this.state.picArr.map(img => (
//               <li key={img}>
//                 <img src={img} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
