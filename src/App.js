import './index.css';
import { Addname } from './Addname';
// import AddTask from './AddTask';



function App() {

  return (
    <div>
      <Addname />
    </div>
  );

}
export default App;



// // props vs state
// props 
// state 




























// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'app',
//       date: new Date(),
//       stateName: 1
//     };
//   }
// changename=() =>{
//   this.setState({stateName: this.state.stateName+ 2});
// }

//   componentDidMount() {

//     console.log("componentDidMount",this.state.stateName)
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     if (10 >= nextState.stateName) {
//       console.log("shouldComponentUpdate", nextState.stateName);
//       return true;
//     }
//     else {
//       console.log("shouldComponentUpdate", nextState.stateName);
//       return false;

//     }
//   }
//   componentDidUpdate(){
//     setInterval(() => {
//       this.setState({ date: new Date() })
//     }, 1000)
//     console.log("componentDidUpdate",this.state.stateName);
//   }
//   //"hh"
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         {/* <button onClick={this.changename}>{this.state.name}</button> */}
//         <button onClick={this.changename}>{this.state.stateName}</button> 
//          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         {/* <h3 style={{cursor: 'pointer'}} onClick={this.prevState}>increase{this.state.stateName}</h3> */}
//       </div>
//     );
//   }
// }
// function Changename() {
//   const [state, setstate] = useState(["ddd", 0]);


//   const changename2 = () => {

//     const newtask = [...state];
//     newtask[1] += 1;
//     setstate(newtask);

//   }
//   useEffect(() => {
//     console.log('mount');
//   }, [state])
//   // console.log(state.dates);
//   return (
//     <div>
//       <h1>Hello, world!</h1>

//       <h2 onClick={() => changename2(true)} className="blueText">It is {state[1]}.</h2>
//     </div>
//   );
// }