var Container = React.createClass({
  getInitialState : function(){
    return {data: []};
  },
  componentDidMount: function(){
    console.log("Component mounted.");
    this.firebaseRef = new Firebase('https://kroniikkamaatti.firebaseIO.com/');
    this.data = [];
    this.firebaseRef.on('child_added', function(dataSnapshot){
      this.data.push(dataSnapshot.val());
      this.setState({data: this.data})
    }).bind(this);
  },
	render: function(){
		return(
      <div className="frontContainer">
      <h1>Valitse ainejärjestö</h1>
      </div>
		);
	}
});

var GuildContainer = React.createClass({
  render: function(){
    console.log(this.props.data);
    var guildNodes = this.props.data.map(function(guild){
      return(
        <ContainerView data={guild}/>
      );
    });
  }
});

var ContainerView = React.createClass({
  getInitialState: function(){
    return {clicked: false};
  },
  handleClick: function(event){
    this.setState({clicked: !this.state.clicked})
  },
  render: function(){
    console.log("containerView rendering.");
    console.log(this.props.data);
    if(clicked){
      return(
        <IconView onClick={this.handleClick} />
      );
    }else{
      return(
        <TutorView/>
      );
    }
  }
});

var IconView = React.createClass({
  render: function(){
    <div className="iconView">
      <p>Placeholder text</p>
    </div>
  }
});

var TutorView = React.createClass({
  render: function(){
    return(
      <p>tutorview palceholder</p>
    )
  }
});

ReactDOM.render(
  <Container/>,
  document.getElementById('componentSet')
);
