var win = Ti.UI.createWindow({
	backgroundColor : "ff0000",
	fullscreen : true
});

//Scrollable View Using Ti.UI.ScrollableView
//console.log(numberOfViews);

var test = function() {
	var empty = [];

	for (var i = 0; i < numberOfViews; i++) {
		var view = Ti.UI.createImageView({
			//image: "imageGallery/" + images[i],
			image : "imageGallery/" + galleryList[i],
			top : 0,
			left : 0,
			height : "100%",
		});

		empty.push(view);

	}

	var scrollableView = Ti.UI.createScrollableView({
		views : empty, //accepts an array data type of views
		height : "100%",
		top : 0,
		showPagingControl : false
		//paginControl: "#000"
	});

	return scrollableView;

};

var newMedia = test();

win.add(newMedia);

var myCars = function(element) {
	console.log(element.index);
	//rich note: this will display the current clicked old object index id

	newMedia.currentPage = element.index;
	//this is new index  = //this is old index

	win.open();
};

/////////LABEL

var menu = Ti.UI.createView({
	backgroundColor : "gray",
	bottom : 0,
	height : "20%"
});

console.log(getData);
var getData = function() {
	menuLabel.text = this.views[this.currentPage].data;
};

var menuLabel = Ti.UI.createLabel({
	text : "imageGallery/" + getData.text,
	color : "#fff"

});

//test.addEventListener("scrollend", getData);

//Back Buttton

var backButton = Ti.UI.createLabel({
	text : "Back",
	color : "fff",
	left : 5,
	bottom : 5
});

backButton.addEventListener("click", function() {
	win.close();
});

mainWindow.addEventListener("click", function(evt) {
	//console.log(evt.source.type); //rich note: getting the unique identifier

	if (evt.source.type === "imageMedia") {
		myCars(evt.source);
	}
});

menu.add(menuLabel);
win.add(menu);
//win.add(scrollableView);

win.add(backButton);
