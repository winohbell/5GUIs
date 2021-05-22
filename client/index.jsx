import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './src/Counter.jsx';
import TempConv from './src/TempConv.jsx';
import FlightBooker from './src/FlightBooker.jsx';
import Timer from './src/Timer.jsx';
import Crud from './src/Crud/Crud.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {}
      };

      render() {
          return (
            <div className="container">
                <p>I'm here</p>
                <div className="task" id="task1">
                    <div className="title">1. Counter</div>
                    <Counter/>
                </div>
                <div class="task" id="task2">
                    <div className="title">2. Temperature Converter</div>
                    <TempConv/>
                </div>
                <div class="task" id="task3">
                    <div className="title">3. Flight Booker</div>
                    <FlightBooker/>
                </div>
                <div class="task" id="task4">
                    <div className="title">4. Timer</div>
                    <Timer/>
                </div>
                <div class="task" id="task5">
                    <div className="title">5. CRUD</div>
                    <Crud/>
                </div>
            </div>
          )
      }
}

ReactDOM.render(<App />, document.getElementById('app'));