var CommentBox = React.createClass({
render : function(){
	return (
		<div class="commentBox">
			<h1>Comments</h1>
			<CommentList />
			<CommentForm />
		</div>
	);
}
});

var CommentList = React.createClass({
	render:function(){	
	return(
		<div class="commentList">
			Hi there ... I am Comment List ..!!
		</div>
	);
	}
});


var CommentForm = React.createClass({
	render : function(){
		return (
		<div class="commentForm">
	 		Hey... I am the comment form..!!!
		</div>
		);
	}
});

React.render(
<CommentBox />,
document.getElementById('content')
);


