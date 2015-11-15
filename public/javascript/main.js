var GuildSelected = 0;

var Container = React.createClass({
  getInitialState : function(){
    return {data: []};
  },
  componentDidMount: function(){
    console.log("TopContainer mounted.");
    this.firebaseRef = new Firebase('https://kroniikkamaatti.firebaseIO.com/');
    this.data = [];
    this.firebaseRef.on('child_added', function(dataSnapshot){
      this.data.push(dataSnapshot.val());
      this.setState({data: this.data})
    }.bind(this));
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
  onChildChanged: function(child, newState){
    console.log("Child changed with state: "+ newState);
    if(child===0){
      riskiClicked = newState;
    }else{
      digitClicked = newState;
    }
  },
  render: function(){
    console.log("GuildContainer rendering");
    console.log(this.props.data);
    var guild = this.props.data;
    var riskiNode = function(){
      return(
        <AsteriskiView data={"Asteriski"}/>
      );
    };
    var digitNode = function(){
      return(
        <DigitView data={"Digit"}/>
      );
    };
    return(
      <div className="contentContainer">
      <h2>Valitse ensin järjestö, sitten tuutoriryhmä.</h2>
        <AsteriskiView/>
        <DigitView/>
      </div>
    );
  }
});

var AsteriskiView = React.createClass({
  getInitialState: function(){
    return {clicked: false};
  },
  componentDidMount: function(){
    console.log("AsteriskiView mounted.");
  },
  handleClick: function(event){
    this.setState({clicked: !this.state.clicked});
    this.props.callbackParent(0, this.state.clicked);
    
  },
  render: function(){
    if(!this.state.clicked && GuildSelected != 1){
      console.log("RiskiView has not been clicked.");
      return(
        <div className="iconView">
          <img className="guildIcon" src="/images/asteriski.png" onClick={this.handleClick}/>
        </div>
      );
    }else{
      return(
        <TutorView data={"Asteriski"}/>
      );
    }
  }
});

var DigitView = React.createClass({
  getInitialState: function(){
    return {clicked: false};
  },
  handleClick: function(event){
    this.setState({clicked: !this.state.clicked});
    this.props.callbackParent(this.state.clicked);
  },
  componentDidMount: function(){
    console.log("DigitView mounted.");
  },
  render: function(){
    console.log(this.props.data);
    if(!this.state.clicked && GuildSelected != 2){
      return(
        <div className="iconView">
          <img className="guildIcon" src="/images/digit.png" onClick={this.handleClick}/>
        </div>
      );
    }else{
      return(
        <TutorView data={"Digit"}/>
      );
    }
  }
});


var TutorView = React.createClass({
  render: function(){
    console.log("Showing tutorView for: " + this.props.data);
    if(this.props.data === "Digit"){
      return(
        <div className="iconView">
          <ul className="tutorList">
            <h3>{this.props.data + "in tuutoriryhmät"}</h3>
            <li><a href="#">Tatu ja Julius</a> </li>
            <li><a href="#">Asser ja Tino</a> </li>
            <li><a href="#">Axel ja Lasse</a> </li>
            <li><a href="#">Konsta ja Pilvi</a> </li>
            <li><a href="#">Olli ja Sampsa</a> </li>
          </ul>
        </div>
      );
    }else{
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
    }
  }
});

ReactDOM.render(
  <Container/>,
  document.getElementById('componentSet')
);
