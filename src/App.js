import React, {Component, useState} from "react"
import "./App.css"
import { BigPic, Icon } from "./Pictures";

class App extends Component{
    constructor(props){
        super(props);
        this.grabData = this.grabData.bind(this)
    }
    state = {
        data: {},
        weather: [],
        dataQueued: false,
        rendered: false,
    }
    grabData(lat, lon, city) {        
        console.log('Loading json');
        const APP_ID = process.env.REACT_APP_APP_ID
        const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=" + APP_ID;
        let URL = `${BASE_URL}&q=${city}`
        if (lon, lat){
            URL = `${BASE_URL}&lat=${lat}&lon=${lon}`
        }
        fetch(URL, {
            method: "GET"
        })
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                data: json,
                dataQueued: true
            });
        })
        console.log("grabData state",this.state)
    }
    componentDidMount(){
        this.grabData("","","Salt Lake City");
    }
    setWeather(){
            let days = [];
            for (let i = 0; i < this.state.data.list.length; i+=8) {
                const base = this.state.data.list[i];
                let day = {}
                day.date = base.dt_txt;
                day.temp = base.main.temp;
                day.max_temp = base.main.temp_max;
                day.min_temp = base.main.temp_min;
                day.weather = base.weather[0].description;
                day.icon = base.weather[0].icon;
                days.push(day);
            }
            this.setState({weather: days});
            if(days[0].icon.includes("d")){
                document.body.style.backgroundColor = "#486285"
            }else{
                document.body.style.backgroundColor = "#463970"
            }
        console.log("setWeather state",this.state)
    }

    render(){
        if(this.state.dataQueued && this.state.data.list){
            this.setWeather();
            this.setState({dataQueued:false});
            this.setState({rendered: true})
            console.log("renderData", this.state)
            return(
                <p>Loading...</p>
            );
        }
        else if(!this.state.weather[0] || !this.state.rendered){
            return(
                <p>Loading...</p>
            );
        }
        else{
            if(this.state.data.cod == "200"){

                return(
                    <div className="App">
                    {console.log("renderReturnData", this.state)}
                    <h1>{this.state.data.city.name}, {this.state.data.city.country}</h1>
                    <h3>Lat:{this.state.data.city.coord.lat} Lon:{this.state.data.city.coord.lon}</h3>
                    <div className="daysDisplay">
                        {this.state.weather.map(day => (
                            <Day day={day}/>
                        ))}
                    </div>
                    <Search grabData={this.grabData}/>
                </div>
            );
        }else{
            return(
                <div className="App">
                    <h1>Said location was not found</h1>
                    <Search grabData={this.grabData}/>
                </div>
            );
        }
        }
    }
}

function Day({day}){
    const date = day.date.substring(5, 10).replaceAll("-", ", ").replaceAll(/^0| 0/g, "")
    const uppercaseWeather = day.weather.split(" ").map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(" ")
    return(
        <div className="day">
            {/* These will take in the icon name */}
            <BigPic type={day.icon}/>
            <p className="data">{date}</p>
            <Icon type={day.icon}/>
            <p className="data">{degree(day.temp)}&deg;</p>
            <p className="data">H: {degree(day.max_temp)}&deg; L: {degree(day.min_temp)}&deg;</p>
            <p className="data">{uppercaseWeather}</p>
        </div>
    )
}

function degree(temp){
    return String(temp).replaceAll(/\..+/g, "")
}

function Search({grabData}){
    const [city, setCity] = useState("");
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
  
    const submit = (e) => {
      e.preventDefault();
      if (!city && !lat && !lon) return;
      grabData(lat, lon, city);
      setCity("");
      setLat("");
      setLon("");
    };
  
    return (
      <form onSubmit={submit}>
        <input
          type="text"
          value={city}
          placeholder="City..."
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn" type="submit">
          Search for City
        </button>
        <input
          type="text"
          value={lat}
          placeholder="Latitude..."
          onChange={(e) => setLat(e.target.value)}
        />
        <input
          type="text"
          value={lon}
          placeholder="Longtitude..."
          onChange={(e) => setLon(e.target.value)}
        />
        <button className="btn" type="submit">
          Search by Latitude and Longtitude
        </button>
        
      </form>
    );
  };

export default App;