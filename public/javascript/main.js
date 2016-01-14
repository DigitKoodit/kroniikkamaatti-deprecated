var GuildSelected = 0;

var TatuJulius = ["Aleksi", "Arttu", "Jali", "Matti", "Mikael", "Olli", "Ossi", "Roni", "Samuli"];
var AsserTino = ["Eemeli", "Janne", "Johan", "Lassi", "Niklas B", "Niklas Lehtonen", "Santeri", "Tero", "Valtteri"];
var AxelLasse = ["Joona", "Adrian", "Aleksi", "Antti", "Artturi", "Jussi", "Kalle", "Niklas N"];
var KonstaPilvi = ["Henna", "Josia", "Lauri L", "Lauri M", "Loviisa", "Maria", "Meri", "Timo", "Topi"];
var OlliSampsa = ["Antti", "Juho", "Lauri", "Mikko", "Niklas Luomala", "Peetu", "Rami"];

var IvanHenna = [];
var EemilEero = [];
var JuhaLauri = [];
var SuviEeva = [];
var ValtteriJesse = [];
var JannePekka = [];

var Container = React.createClass({
  getInitialState : function(){
    return {data: []};
  },
  componentDidMount: function(){
    console.log("TopContainer mounted.");
    this.firebaseRef = new Firebase('https://kroniikkamaatti.firebaseIO.com/');
    this.data = [];
    // this.firebaseRef.on('child_added', function(dataSnapshot){
    //   this.data.push(dataSnapshot.val());
    //   this.setState({data: this.data})
    // }.bind(this));
  },
	render: function(){
		return(
      <div className="frontContainer">
      <h1>Kroniikkamaatti</h1>
      <GuildContainer/>
      </div>
		);
	}
});

var GuildContainer = React.createClass({
  getInitialState: function(){
    return {riskiClicked: false, digitClicked: false};
  },
  onClicked: function(child, newState){
    console.log("Child changed with state: "+ newState);
    if(child===0){
      this.setState({riskiClicked: newState});
      this.setState({digitClicked: !newState});
      console.log("riskiClicked state: " + this.state.riskiClicked);
    }else{
      this.setState({digitClicked: newState});
      this.setState({riskiClicked: !newState});
      console.log("digitClicked state: " + this.state.digitClicked);
    }

    this.forceUpdate();
  },
  render: function(){
    console.log("GuildContainer rendering");
    console.log(this.state.riskiClicked +" and " +this.state.digitClicked);
    var guild = this.props.data;
    return(
      <div className="contentContainer">
      <h2>Valitse ensin järjestö, sitten tuutoriryhmä.</h2>
        <AsteriskiView onClicked={this.onClicked} digitClicked={this.state.digitClicked} riskiClicked={this.state.riskiClicked}/>
        <DigitView onClicked={this.onClicked} riskiClicked={this.state.riskiClicked} digitClicked={this.state.digitClicked}/>
      </div>
    );
  }
});

var AsteriskiView = React.createClass({
  getInitialState: function(){
    return {clicked: this.props.riskiClicked};
  },
  componentDidMount: function(){
    //console.log("AsteriskiView mounted.");
  },
  handleClick: function(event){
    console.log("RiskiView icon clicked.");
    this.setState({clicked: !this.state.clicked}, function(){
      this.props.onClicked(0, this.state.clicked);
    });
    console.log("RiskiView clicked state after setState="+ this.state.clicked);    
  },
  render: function(){
    console.log("Rendering riskiView, digitClicked is "+ this.props.digitClicked);
    if(!this.state.clicked || this.props.digitClicked){
      return(
        <div className="iconView">
          <img className="guildIcon" src="/images/asteriski.png" onClick={this.handleClick}/>
        </div>
      );
    }else if(this.state.clicked && !this.props.digitClicked){
      return(
        <TutorView data={"Asteriski"}/>
      );
    }
  }
});

var DigitView = React.createClass({
  getInitialState: function(){
    return {clicked: this.props.digitClicked};
  },
  handleClick: function(event){
    console.log("DigitView icon clicked,");
    this.setState({clicked: !this.state.clicked}, function(){
      this.props.onClicked(1, this.state.clicked);
    });
  },
  componentDidMount: function(){
    //console.log("DigitView mounted.");
  },
  render: function(){
    console.log("Rendering DigitView")
    if(!this.state.clicked || this.props.riskiClicked){
      return(
        <div className="iconView">
          <img className="guildIcon" src="/images/digit.png" onClick={this.handleClick}/>
        </div>
      );
    }else if(this.state.clicked && !this.props.riskiClicked){
      return(
        <TutorView data={"Digit"}/>
      );
    }
  }
});


var TutorView = React.createClass({
  getInitialState: function(){
    return {fuksit: null};
  },
  handleTutorClick: function(fuksit){
    console.log("Tutorit clicked with "+ fuksit[0])
    this.setState({fuksit: fuksit});
  },
  render: function(){
    console.log("Showing tutorView for: " + this.props.data);
    if(this.state.fuksit === null && this.props.data === "Digit"){
      return(
        <div className="iconView">
          <ul className="tutorList">
            <h3>{this.props.data + "in tuutoriryhmät"}</h3>
            <li onClick={() => {this.handleTutorClick(TatuJulius)} }>Tatu ja Julius </li>
            <li><a href="#">Asser ja Tino</a> </li>
            <li><a href="#">Axel ja Lasse</a> </li>
            <li><a href="#">Konsta ja Pilvi</a> </li>
            <li><a href="#">Olli ja Sampsa</a> </li>
          </ul>
        </div>
      );
    }else if (this.state.fuksit === null && this.props.data === "Asteriski"){
      console.log("showing Riskit");
      return(
        <div className="iconView">
          <ul className="tutorList">
            <h3>{this.props.data + "n tuutoriryhmät"}</h3>
            <li><a href="#">Ivan ja Henna</a> </li>
            <li><a href="#">Eemil ja Eero</a> </li>
            <li><a href="#">Juha ja Lauri</a> </li>
            <li><a href="#">Suvi ja Eeva</a> </li>
            <li><a href="#">Valtteri ja Jesse</a> </li>
            <li><a href="#">Janne ja Pekka</a> </li>
          </ul>
        </div>
      );
    }else if(this.state.fuksit !== null){
      console.log("Fuksit is not null");
      return(
        <FuksiView fuksit={this.state.fuksit}/>
        // <p>Placeholder</p>
      );
    }else{
      return(<h2>Something went wrong.</h2>);
    }
  }
});

var FuksiView = React.createClass({
  getInitialState: function(){
    console.log("FuksiView called with " + this.props.fuksit);
    return  {fuksiClicked: null, fuksit: this.props.fuksit}
  },
  handleFuksiClick: function( i){
    console.log(this.props.fuksit[i] + " clicked.");
    this.setState({fuksiClicked: this.props.fuksit[i]});
  },
  componentDidMount: function(){
    console.log("Rendering fuksiview for: " + this.props.fuksit);
    // this.handleFuksiClick(2);
  },

  render: function(){
    var that = this;
    if(this.state.fuksiClicked != null){
      console.log("Fuksi "+ this.state.fuksiClicked +"clicked, grabbing fuksi-form.");
      return(
        <CommentView name={this.state.fuksiClicked}/>
      );
    }else{
      return(
        <div className="tutorList">
          <ul>
            {this.props.fuksit.map(function(fuksi, i){
              console.log("i: " + i + " fuksi: " + fuksi);
              return <li key={i} onClick={() => {that.handleFuksiClick(i) }}> {fuksi}</li>
            })}
          </ul>
        </div>
      );
    }
  }
});

var CommentView = React.createClass({
  componentDidMount: function(){
    console.log("Component mounted for " + this.props.name);
  },
  handleTextChange: function(e){
    this.setState({text:e.target.value});
  },
  commentSubmit: function(comment){
    comment.preventDefault();
    var text = this.state.text.trim();
    var person = this.props.name;
    console.log("Comment for " + person + " that says " + text);
    if( !text){
      return;
    }
    this.setState({text:''});
  },
  getInitialState: function(){
    return {text: ''};
  },
  render: function(){
    return(
      <div className="fuksiContent">
      <h2>{this.props.name}</h2>
        <form className="commentForm" onSubmit={this.commentSubmit}>
          <input className="commentField" type="text" placeholder="Kommenttisi" value={this.state.text} onChange={this.handleTextChange}/>
          <input className="commentButton" type="submit" value="Kronikoi"/>
        </form>
      </div>
    );
  }
});

ReactDOM.render(
  <Container/>,
  document.getElementById('componentSet')
);
