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
    console.log("TopContainer rendering.");
		return(
      <div className="frontContainer">
      <h1>Kroniikkamaatti</h1>
      <GuildContainer/>
      </div>
		);
	}
});

var GuildContainer = React.createClass({
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
    console.log("guildNodes defined, now to render.");
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
    console.log("initializing riskiView.");
    return {clicked: false};
  },
  componentDidMount: function(){
    console.log("AsteriskiView mounted.");
  },
  handleClick: function(event){
    this.setState({clicked: !this.state.clicked})
  },
  render: function(){
    console.log("AsteriskiView rendering.");
    console.log(this.props.data);
    if(!this.state.clicked){
      console.log("RiskiView has not been clicked.");
      return(
        <div className="iconView">
          <img className="guildIcon" src="/images/asteriski.png" onClick={this.handleClick}/>
        </div>
      );
    }else{
      return(
        <TutorView data={"asteriski"}/>
      );
    }
  }
});

var DigitView = React.createClass({
  getInitialState: function(){
    return {clicked: false};
  },
  handleClick: function(event){
    this.setState({clicked: !this.state.clicked})
  },
  componentDidMount: function(){
    console.log("DigitView mounted.");
  },
  render: function(){
    console.log("DigitView rendering.");
    console.log(this.props.data);
    if(!this.state.clicked){
      console.log("DigitView has not been clicked.");
      return(
        <div className="iconView">
          <img className="guildIcon" src="/images/digit.png" onClick={this.handleClick}/>
        </div>
      );
    }else{
      return(
        <TutorView data={"digit"}/>
      );
    }
  }
});


var TutorView = React.createClass({
  render: function(){
    return(
      <div className="iconView">
        <p>tutorview palceholder</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Container/>,
  document.getElementById('componentSet')
);
