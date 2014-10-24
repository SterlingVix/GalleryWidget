document.clickFunction = function(num) {
//  alert("clicked");
  if (num === 1) {
    document.widgetSingle.appendToNode(document.middleContainer);
  } else if (num === 2) {
    document.widgetThumb.setNodeTo(document.middleContainer);
  } else if (num === 3) {
    document.widgetError.appendToNode(document.middleContainer);
  }
}; // end clickFunction()
  


window.onload = function () {
  var widgetCounter = 0;
  
  console.log('javascript has loaded!')

  var images = ['images/0.jpg', 'images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'];
  var imagesJSON = {
    0: 'images/0.jpg',
    1: 'images/1.jpg', 
    2: 'images/2.jpg', 
    3: 'images/3.jpg', 
    4: 'images/4.jpg'
  };

//  DOMElementString1 = '<div class="thumb-main-image"><img src="' + images[0] + '"></div><div class="thumb-scroll"><h1>Hello World!</h1></div>';
//  DOMElementString2 = '<div class="single-image"><img src="' + images[1] + '"></div>';

  var topContainer = document.getElementById('top-container'); // console.log(topContainer);
  var middleContainer = document.getElementById('middle-container');
  var bottomContainer = document.getElementById('bottom-container');

//  topContainer.innerHTML += DOMElementString1;
  
  var widgetSingle = new Widget('single', images);
  var widgetThumb = new Widget('thumb', images);

  document.images = ['images/0.jpg', 'images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'];
  document.topContainer = document.getElementById('top-container'); // console.log(topContainer);
  document.middleContainer = document.getElementById('middle-container');
  document.bottomContainer = document.getElementById('bottom-container');
  document.widgetSingle = new Widget('single', images);
  document.widgetThumb = new Widget('thumb', images);
  document.widgetError = new Widget('something', images);
    
}; // end document.onload

/*
var middleContainer = document.getElementById('middle-container');
var images = ['images/0.jpg', 'images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'];
var widgetSingle = new Widget('single', images);
var widgetThumb = new Widget('thumb', images);
var widgetError = new Widget('something', images);

widgetSingle.appendToNode(middleContainer);

widgetThumb.setNodeTo(middleContainer);

widgetError.appendToNode(middleContainer);
  

*/




/*
  http://developer.nytimes.com/apps/register
  
Key: 45cf8ae3a4c1e83deef399b6c700ea48:2:70047657

Application: Gallery Widget Key: 45cf8ae3a4c1e83deef399b6c700ea48:2:70047657 Status: active Registered: 3 seconds ago
Key Rate Limits
8	Calls per second
5,000	Calls per day


Key: 0c4257ea2340c6a1d6181ba9c6f1efbd:3:70047657

Application: Gallery Widget Key: 0c4257ea2340c6a1d6181ba9c6f1efbd:3:70047657 Status: active Registered: 3 seconds ago
Key Rate Limits
8	Calls per second
5,000	Calls per day
*/




/*
1) Build image gallery widget
  a. displays a series of images
  b. in 2 modes
  c. Must be configurable
  d. be OOP (support multiple instances)
  
2) Widget Modes:
  a. Thumbnail mode:
    1. Area 1: large version of current image
    2. Area 2: scrollable filmstrip of thumbnails for each image in the gallery.
    3. Clicking a thumbnail in the filmstrip makes that image the 'current image' and replaces previous image in Area 1.
    
  b. Single Image mode:
    1. Area 1: only area:
      a. Each image is displayed one-at-a-time
      b. Clicking the displayed image changes to the next image in the gallery
      c. Clicking last image cycles back to image 1.
      
3) Widget Config
  a. Widget takes in a 'listOfImages' and its 'mode'
  b. "It can take this data in any way you see fit (as a JSON string passed to a constructor function, as data-* attributes on the widget element, the images can be passed as <img> elements within the widget container, etc.)"

4) ...

*/


/*
  Gallery Widget Test
Your task is to build an image gallery widget that displays a series of images in two different modes.  The widget must be configurable and must support multiple instances of the widget existing on the same page.


  Widget Modes
The widget should support two distinct modes:
Thumbnail mode: In thumbnail mode the widget is comprised of two main areas.  The first area displays a large version of the current image.  The second area displays a scrollable filmstrip of thumbnails for each image in the gallery.  Clicking on an thumbnail in the filmstrip makes that image the current image and displays it in the first area (replacing the previously selected image.)

Single Image mode: In single image mode the widget has a single area.  Each image is displayed one-at-a-time in the main area.  Clicking on the displayed image changes to the next image in the gallery.  When the last image is reached, clicking again should cycle back to the first image.
 

  Widget Configuration
The widget takes two pieces of data for its configuration: a list of images for the gallery and its mode.  It can take this data in any way you see fit (as a JSON string passed to a constructor function, as data-* attributes on the widget element, the images can be passed as <img> elements within the widget container, etc.)
 

  Coding Requirements
Do not use any JavaScript libraries, this widget should be written with native JavaScript and standard DOM/browser APIs.
Document and format your code: readability matters.
The widget should work in the current stable versions of Chrome and Safari.
The use of Object Oriented coding practices is a plus.
 

  Test Deliverables
Deliver your project as a self-contained zip file.  Provide an HTML page with at least two instances of your widget: one for each mode, with different images.  
*/