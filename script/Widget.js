var Widget = function (imageArray, widgetMode) {
  this.widgetType = widgetMode;
  this.images = imageArray;
  this.currentImage = 0;
  this.finalImage = this.images.length - 1;
  this.widgetID = Widget.uniqueID++;
  this.widgetNode; // the HTML node of the div containing the main image
  this.imgNode; // the HTML node of the main image
}; // end Widget()


/*****
 * Give the Widget Object a constructor and unique counter for instance IDs
 ****/
Widget.prototype.constructor = Widget;
Widget.uniqueID = 0;


/*****
 * Create the main div container for the widget on the DOM
 ****/
Widget.prototype.createWidgetNode = function () {
  this.widgetNode = document.createElement('div');
  this.widgetNode.setAttribute('class', this.widgetType + '-main-div');
  this.widgetNode.setAttribute('id', 'widget-div-' + this.widgetID);
}; // end createWidgetNode()


/*****
 * Endpoint for creating image elements from widget data
 ****/
Widget.prototype.createImgNode = function (imageIndex) {
  var imageNode = document.createElement('img');
  imageNode.setAttribute('class', this.widgetType + '-img');
  imageNode.setAttribute('id', 'widget-' + this.widgetType + '-img-' + this.widgetID);

  // Set initial picture
  imageNode.setAttribute('src', this.images[imageIndex]);

  return imageNode;
}; // end createImgNode()


/*****
 * Create the filmstrip div container for the thumbnail widget
 ****/
Widget.prototype.createFilmstripNode = function () {
  this.filmstripNode = document.createElement('div');
  this.filmstripImages = [];

  this.filmstripNode.setAttribute('id', 'widget-filmstrip-div-' + this.widgetID);
  this.filmstripNode.setAttribute('class', 'filmstrip-div');

  // create image nodes, push onto array, append to '.thumb-filmstrip-div' div
  for (var i = 0; i <= this.finalImage; i++) {
    this.filmstripImages.push(this.createImgNode(i));
    this.filmstripImages[i].setAttribute('class', 'filmstrip-img');
    this.filmstripImages[i].setAttribute('id', 'filmstrip-img-' + i);
    this.filmstripImages[i].setAttribute('name', i);

    // Add a click event listener to the image
    this.filmstripImages[i].addEventListener('click', this.thumbImageClicked.bind(this));

    // append the image to the '.thumb-filmstrip-div' div
    this.filmstripNode.appendChild(this.filmstripImages[i]);
  } // end for (add pictures)
}; // end createFilmstrip()


/*****
 * Event action from clicking main image
 ****/
Widget.prototype.mainImageClicked = function (event) {
  // Increment this.currentImage or reset
  if (++this.currentImage > this.finalImage) {
    this.currentImage = 0;
  }

  this.updateImage(this.currentImage);
}; // end mainImageClicked()


/*****
 * Event action from clicking thumbnail
 ****/
Widget.prototype.thumbImageClicked = function (event) {
  // update this.currentImage
  this.currentImage = parseInt(event.target.name)
  this.updateImage(this.currentImage);
}; // end thumbImageClicked()


/*****
 * Method to update image rendered on DOM
 ****/
Widget.prototype.updateImage = function (imageIndex) {
  this.imgNode.setAttribute('src', this.images[this.currentImage]);
}; // end updateImage()


/*****
 * Endpoint to place Widget object on DOM
 ****/
Widget.prototype.appendToNode = function (DOMElement) {
  // Create the main widget node
  this.createWidgetNode();
  DOMElement.appendChild(this.widgetNode);

  // Create the main image node
  this.imgNode = this.createImgNode(this.currentImage);
  this.widgetNode.appendChild(this.imgNode);

  if (this.widgetType === 'single') {
    
    // Add event listener to main image, use function binding to bind this Widget object to the DOM node.
    this.imgNode.addEventListener('click', this.mainImageClicked.bind(this));
  } else if (this.widgetType === 'thumb') {
    
    // Create filmstrip
    this.createFilmstripNode();
    this.widgetNode.appendChild(this.filmstripNode);
  } else {
    return 'Error: invalid Widget of type "' + this.widgetType + '".';
  }

  // Return a reference of the appended object so we can capture and manipulate it
  return this;
}; // end appendToNode()
