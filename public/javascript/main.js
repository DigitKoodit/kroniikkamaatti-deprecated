var GuildSelected = 0;

var Digit = [
  {
    tuutorit: "Tatu ja Julius",
    fuksit: ["Aleksi Helenius", "Arttu Nurminen", "Jali Rainio", "Matti Loimaranta", "Mikael Janhonen", "Olli Korhonen", "Ossi Airaksinen", "Roni Ronkainen", "Samuli Virtanen"]
  },
  {
    tuutorit: "Asser ja Tino",
    fuksit: ["Eemeli Tynys", "Janne Marjalaakso", "Johan Sjövall", "Lassi Salomaa", "Niklas Byggmäster", "Niklas Lehtonen", "Santeri Juhela", "Tero Yrjölä", "Valtteri Murtonen"]
  },
  {
    tuutorit: "Axel ja Lasse",
    fuksit: ["Joona Juusti", "Adrian Borzyszkowski", "Aleksi Palalitsas", "Antti Vuorinen", "Artturi Tähtinen", "Jussi Wallin", "Kalle Linden", "Niklas Niemelä"]
  },
  {
    tuutorit: "Konsta ja Pilvi",
    fuksit: ["Henna Henriksson", "Josia Nyman", "Lauri Laakkonen", "Lauri Mukkala", "Loviisa Mäenpää", "Maria Kostina", "Meri Saarinen", "Timo Blomqvist", "Topi Mäkinen"]
  },
  {
    tuutorit: "Olli ja Sampsa",
    fuksit: ["Antti Auranen", "Juho Kronbäck", "Lauri Jussinmäki", "Mikko Pesonen", "Niklas Luomala", "Peetu Seilonen", "Rami Ilo"]
  }

];

var Asteriski = [
  {
  tuutorit: "Ivan ja Henna",
  fuksit: ["Paula Heino", "Sanni Koskinen", "Mika Korhonen", "Joonas Jäntti", "Jukka Hyttinen", "Mikko Kokkonen", "Mio Mattila", "Sulo Nippolainen", "Samuli Suutari"]
  },
  {
  tuutorit: "Eemil ja Eero",
  fuksit: ["Emma Lepistö", "Kaisa Pietilä", "Mikko Rustamo", "Kimmo Kauria", "AP Jääskeläinen", "Jaakko Kortesharju", "Toni Mobin", "Joni Osmoviita", "Teemu Tenkanen"]
  },
  {
  tuutorit: "Juha ja Lauri",
  fuksit: ["Minna Ikiviita", "Tommi Tocklin", "Antti Laukkanen", "Sami Granö", "Janina Kauppila", "Mika Lainela", "Joonas Mäkinen", "Saku Rennanen"]
  },
  {
  tuutorit: "Suvi ja Eva",
  fuksit: ["Ville Arvonen", "Santeri Ekdahl", "Marko Silander", "Olli Aarnio", "Marko Halonen", "Vilho Kivihalme", "Riku Lindblom", "Ville Nikkari", "Markus Saloranta"]
  },
  {
  tuutorit: "Valtteri ja Jesse",
  fuksit: ["Camilla Lähteenmäki", "Pinja Rantala", "Sami Kalli", "Krister Laakso", "Juho Karasti", "Toni Kyöttilä", "Aleksi Myllynpää", "Lauri Pelin", "Sami Torvinen"]
  },
  {
  tuutorit: "Janne ja Pekka",
  fuksit: ["Susanna Ritala", "Iina Siekkinen", "Aleksi Backman", "Mikael Mauninen", "Joona Kilpinen", "Henri Lammi", "Niki Niittymäki", "Ville Ritola", "Toni Tuominen"]
  }
];

var Container = React.createClass({
  getInitialState : function(){
    return {data: []};
  },
  componentDidMount: function(){
    console.log("TopContainer mounted.");
    
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
    return {fuksit: null, jarjesto: null, tuutorit: null};
  },
  handleTutorClick: function(fuksit, tuutorit, jarjesto){
    console.log("Tutorit clicked with "+ fuksit[0])
    this.setState({fuksit: fuksit, tuutorit: tuutorit, jarjesto: jarjesto});
  },
  handleReturnClick: function(){
    console.log("Return was clicked.");
    this.setState({fuksit: null});
  },
  render: function(){
    console.log("Showing tutorView for: " + this.props.data);
    var that = this;
    if(this.state.fuksit === null && this.props.data === "Digit"){
      return(
        <div className="iconView">
          <ul className="tutorList">
            <h3>{this.props.data + "in tuutoriryhmät"}</h3>
              {Digit.map(function(tuutori, i){
              // console.log("i: " + Digit[i].tuutorit + " fuksi: " + Digit[i].fuksit);
              return <li className="listComponent" key={i} onClick={() => {that.handleTutorClick(Digit[i].fuksit,Digit[i].tuutorit, "Digit") }}><a href="#"> {Digit[i].tuutorit}</a></li>
            })}
          </ul>


        </div>
      );
    }else if (this.state.fuksit === null && this.props.data === "Asteriski"){
      console.log("showing Riskit");
      return(
        <div className="iconView">
          <ul className="tutorList">
            <h3>{this.props.data + "n tuutoriryhmät"}</h3>
            {
              Asteriski.map(function(tuutori, i){
              return <li className="listComponent" key={i} onClick={()=> {that.handleTutorClick(Asteriski[i].fuksit, Asteriski[i].tuutorit, "Asteriski")} }><a href="#"> {Asteriski[i].tuutorit}</a></li>
            }.bind(that))}
          </ul>
        

        </div>
      );
    }else if(this.state.fuksit !== null){
      console.log("Fuksit is not null");
      return(
        <FuksiView fuksit={this.state.fuksit}  handleReturnClick={that.handleReturnClick} jarjesto={this.state.jarjesto} tuutorit={this.state.tuutorit}/>
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
    return  {fuksiClicked: null, fuksit: this.props.fuksit, jarjesto: this.props.jarjesto, tuutorit: this.props.tuutorit}
  },
  handleFuksiClick: function( i){
    console.log(this.props.fuksit[i] + " clicked.");
    this.setState({fuksiClicked: this.props.fuksit[i]});
  },
  componentDidMount: function(){
    console.log("Rendering fuksiview for: " + this.props.fuksit);
    // this.handleFuksiClick(2);
  },
  handleClick: function(){
    console.log("HandleClick was called in fuksiview");
    this.props.handleReturnClick();
  },
  handleReturnClick: function(){
    this.setState({fuksiClicked: null});
  },
  render: function(){
    var that = this;
    if(this.state.fuksiClicked != null){
      console.log("Fuksi "+ this.state.fuksiClicked +"clicked, grabbing fuksi-form.");
      return(
        <CommentView name={this.state.fuksiClicked} handleReturnClick={that.handleReturnClick} tuutorit={this.props.tuutorit} jarjesto={this.props.jarjesto}/>
      );
    }else{
      return(
        <div className="iconView">
          <ul className="tutorList">
            {this.props.fuksit.map(function(fuksi, i){
              console.log("i: " + i + " fuksi: " + fuksi);
              return <li className="listComponent" key={i} onClick={() => {that.handleFuksiClick(i) }}><a href="#"> {fuksi}</a></li>
            })}
          </ul>
          
          <div><a className="backKey" href="#" onClick={() => {that.handleClick()} }>← Palaa</a></div>

        </div>
      );
    }
  }
});

var CommentView = React.createClass({
  componentDidMount: function(){
    console.log("Component mounted for " + this.props.name);
    this.firebaseRef = new Firebase('https://kroniikkamaatti.firebaseIO.com/'+this.props.jarjesto+"/"+this.props.tuutorit+"/");
    this.data = [];
    this.firebaseRef.on('child_added', function(dataSnapshot){
      this.data.push(dataSnapshot.val());
      this.setState({data: this.data})
    }.bind(this));
    this.postsRef = this.firebaseRef.child(this.props.name);
  },
  handleTextChange: function(e){
    this.setState({text:e.target.value});
  },
  commentSubmit: function(comment){
    var that = this;
    comment.preventDefault();
    var text = this.state.text.trim();
    var person = this.props.name;
    console.log("Comment for " + person + " that says " + text);
    if(!text){
      return;
    }
    that.postsRef.push({
      comment: text
    });
    this.setState({text:''});
  },
  componentWillUnmount: function() {
    this.firebaseRef.off();
  },
  getInitialState: function(){
    return {text: ''};
  },
  handleClick: function(){
    this.props.handleReturnClick();
  },
  render: function(){
    return(
      <div className="iconView">
      <div className="fuksiContent">
        <form className="commentForm" onSubmit={this.commentSubmit}>
      <h2>{this.props.name}</h2>
          <textarea rows="3" className="commentField" type="text" placeholder="Kommenttisi" value={this.state.text} onChange={this.handleTextChange}/>
          <input className="commentButton" type="submit" value="Kronikoi"/>
        </form>
        
      </div>
      <div><a className="backKey" href="#" onClick={() => {this.handleClick()} }>← Palaa</a></div>
      </div>
    );
  }
});

ReactDOM.render(
  <Container/>,
  document.getElementById('componentSet')
);