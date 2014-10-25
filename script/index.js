window.onload = function () {
  console.log('Page loaded');
  
  // Container for all widget objects
  var widget = [];
  var animals = ['images/0.jpg', 
                'images/1.jpg', 
                'images/2.jpg', 
                'images/3.jpg', 
                'images/4.jpg', 
                'images/5.jpg', 
                'images/6.jpg', 
                'images/7.jpg', 
                'images/8.jpg'];
  
  var magazines = ['images/a.jpg', 
                   'images/b.jpg', 
                   'images/c.jpg', 
                   'images/d.jpg', 
                   'images/e.jpg', 
                   'images/f.jpg', 
                   'images/g.jpg', 
                   'images/h.jpg'];
  
  

  // Get DOM node references
  var leftContainer = document.getElementById('left-container');
  var rightContainer = document.getElementById('right-container');
  
  // Button-referenced function for adding instances to the DOM
  document.addWidget = function(mode, containerID) {
    var container = document.getElementById(containerID);
    var latestWidget = widget.length;
    
    // Select different images for the widgets
    var images;
    if (widget.length % 2 === 0) {
      images = animals;
    } else {
      images = magazines;
    }
    
    // Instantiate a new widget of mode 'mode' and push to the 'widget' array
    widget.push( new Widget(images, mode) );
    
    // Append the new widget instance to the DOM
    widget[latestWidget].appendToNode(container);
  }; // end addWidget()
}; // end document.onload


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
  Test Deliverables
Deliver your project as a self-contained zip file.  Provide an HTML page with at least two instances of your widget: one for each mode, with different images.  
*/