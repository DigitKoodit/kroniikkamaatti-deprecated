var SkeletonFooter = React.createClass({
	render: function(){
		return(
			<div className="skeletonFooter">
					<p>© 2015 File-toimikunta</p>
			</div>
		);
	}
});

ReactDOM.render(
		<SkeletonFooter/>,
		document.getElementById('footerPart')
);