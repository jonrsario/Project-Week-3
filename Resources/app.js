//Device width equation
var deviceWidth = Ti.Platform.displayCaps.platformWidth;
var numberOfViews = 40;
var rowCount = 4;
var margin = 10;
var trueWidth = deviceWidth - margin * (rowCount + 1);
var size = trueWidth / rowCount;

//Pull images from imageGallefy folder

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "imageGallery");
var galleryList = gallery.getDirectoryListing();

//console.log(galleryList);

var mainWindow = Ti.UI.createWindow({
	backgroundColor : "",
	fullscreen : true,
});

var viewContainer = Ti.UI.createScrollView({
	layout : "horizontal",
	contentWidth : deviceWidth
});

var makeViews = function() {
	for (var i = 0; i < numberOfViews; i++) {
		var newView = Ti.UI.createView({
			top : "10dp",
			left : "10dp",
			//right: 20,
			width : size,
			backgroundColor : "fff",
			height : size,
			borderRadius : 8

		});
		var theImage = Ti.UI.createImageView({
			//image: "imageGallery/" + images[i],
			image : "imageGallery/" + galleryList[i],
			top : 0,
			left : 0,
			height : "100%",
			parent : newView,
			type: "imageMedia",
			index : i
		});
		newView.add(theImage);
		viewContainer.add(newView);

		/*theImage.addEventListener("click", function(e) {

			var previews = require('Navigator');

		});*/
	}
};

makeViews();
mainWindow.add(viewContainer);

var previews = require('Navigator');

mainWindow.open();
