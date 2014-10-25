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
  document.addWidget = function (mode, containerID) {
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
    widget.push(new Widget(images, mode));

    // Append the new widget instance to the DOM
    widget[latestWidget].appendToNode(container);
  }; // end addWidget()
}; // end window.onload()