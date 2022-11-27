import {useState, useEffect} from "react";
import CardList from "./components/card-list/card-list-component";
import SeachBox from "./components/search-box/search-box.component";
import './App.css';

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(()=> {
        const newFilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);

        setFilteredMonsters(newFilteredMonsters);
    }
    )}, [])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setMonsters(users));
    },[monsters, searchField])

    const onSearchChange = (event) => {
      console.log(event)
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString)
      }
      ;
    return(
        <div className="App">
            <h1 className='app-title'>Monsters Rolodex</h1>
            <SeachBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='monsters-search-box'/>
            <CardList monsters={filteredMonsters}/>
        </div>
    )


}
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters : [],
//         searchField: ''
//     }
//   }
//
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(users => this.setState(() =>{
//         return {monsters : users}
//         }
//         ,
//             () => {
//           console.log(this.state);
//             }));
//
//
//   }
//   onSearchChange = (event) => {
//       console.log(event)
//       const searchField = event.target.value.toLocaleLowerCase();
//       this.setState(() => {
//           return {
//               searchField
//           };
//       })}
//       ;
//
//   render (){
//       const {monsters, searchField} = this.state;
//       const {onSearchChange} = this;
//       const filteredMonsters = monsters.filter((monster) => {
//           return monster.name.toLocaleLowerCase().includes(searchField);
//       });
//     return (
//         <div className="App">
//             <h1 className='app-title'>Monsters Rolodex</h1>
//             <SeachBox onChangeHandler = {onSearchChange} placeholder = 'Search Monsters' className = 'monsters-search-box'/>
//             <CardList monsters = {filteredMonsters}></CardList>
//         </div>
//     );
//
//   }
//   }

export default App;
/*
* <button onClick={() => {
              this.setState({name:{firstName : 'Wesley', lastName : 'Price'}});
              console.log(this.state)
            }}>
            *
            *
            *
            *
            *
            * <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
            </p>
            <button onClick={() => {
            this.setState(() => {
            return {
            name : {firstName : 'Wesley', lastName : 'Price'},
            }
            }, () => {console.log(this.state)})}}
            >
              Change Name
            </button>
          </header>*/

