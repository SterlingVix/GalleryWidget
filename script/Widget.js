var Widget = function(widgetType, imageCollection) {
  this.widgetType = widgetType;
  this.images = imageCollection;
  this.currentImage = 0;
  this.widgetID; // = this.setID();
  this.divID = 'id="widget-div' + this.widgetID + '"';
  this.imgID = 'id="widget-img' + this.widgetID + '"';
  this.imageHTML =  this.setImageHTML();
  this.widgetHTML = this.setInnerHTML();
  this.divNode; // = this.setDivNode(); // the HTML node of the div containing the main image
  this.imgNode; //  = this.setImgNode(); // the HTML node of the main image
    
  
  
}; // end Widget()

Widget.prototype.id = 0;

Widget.prototype.setID = function() {
//  return ('id="widget' + Widget.prototype.id++ + '"'); // increment unique widgetID
  return Widget.prototype.id++; // increment unique widgetID
}; // end setID



Widget.prototype.setDivNode = function() {
  return document.getElementById(this.divID);
}


Widget.prototype.setImgNode = function() {
  return document.getElementById(this.imgID);
}


Widget.prototype.foo = function() {console.log("foo");};

Widget.prototype.setInnerHTML = function() {
  if (this.widgetType === 'single') { // the HTML string for the 'single'-type widget
    return '<div class="single-main-div" ' + this.divID + '>' + this.imageHTML + '</div>';
  } else if (this.widgetType === 'thumb') { // the HTML string for the 'thumb'-type widget
    return '<div class="thumb-main-div" ' + this.divID + '>' + this.imageHTML + '</div><div class="thumb-scroll-div"><h1>Hello World!</h1></div>';
  }
  
  // default innerHTML (in case of invalid string):
  return '<div class="widget-error" ' + this.divID + '><h2>Error! Tried to insert a widget of type "' + this.widgetType + '" here.</h2></div>';
}; // end setInnerHTML()

Widget.prototype.setImageHTML = function() {
  if (this.widgetType === 'single') { // the HTML string for the 'single'-type image
    return '<img class="single-main-image" ' + this.imgID + ' src="' + this.images[this.currentImage] + '">';
  } else if (this.widgetType === 'thumb') { // the HTML string for the 'thumb'-type image
    return '<img class="thumb-main-image" ' + this.imgID + ' src="' + this.images[this.currentImage] + '">';
  }
  this.imgID
  // default innerHTML (in case of invalid string):
  return '<div class="widget-error"><h2>Error! Tried to insert a widget of type "' + this.widgetType + '" here.</h2></div>';
}; // end setInnerHTML()


Widget.prototype.appendToNode = function(DOMElement) {
  this.widgetID = this.setID(); // set unique ID
  DOMElement.innerHTML += this.widgetHTML;
  
  this.divNode = this.setDivNode(); // the HTML node of the div containing the main image
  this.imgNode = this.setImgNode(); // the HTML node of the main image
  return this;
};


Widget.prototype.setNodeTo = function(DOMElement) {
  this.widgetID = this.setID(); // set unique ID
  DOMElement.innerHTML += this.widgetHTML;
  
  this.divNode = this.setDivNode(); // the HTML node of the div containing the main image
  this.imgNode = this.setImgNode(); // the HTML node of the main image
  return this;
};


