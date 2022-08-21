function initMap() {
  let options = {
    zoom: 6,
    center: { lat: 9.082, lng: 8.6753 },
  };

  let map = new google.maps.Map(document.getElementById("map"), options);

  //listen for click on map
  google.maps.event.addListener(map, "click", function (event) {
    //add marker
    addMarker({ coords: event.latlng });
  });

  //add marker
  // let marker = new google.maps.Marker({
  //   position: { lat: 6.5244, lng: 3.3792 },
  //   map: map,
  //   icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
  // });

  // let infoDetail = new google.maps.infoDetail({
  //   content: "<h1>BOb MA</h1>",
  // });

  // marker.addListener("click", function () {
  //   infoDetail.open(map, marker);
  // });
  let markers = [
    {
      coords: { lat: 6.5244, lng: 3.3792 },
      iconImage:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      content: "<h1>Lynn MA</h1>",
    },

    {
      coords: { lat: 17.6078, lng: 8.0817 },
      content: "<h1>Amesbury MA</h1>",
    },

    {
      coords: { lat: 7.9465, lng: 1.0232 },
    },
  ];

  //loop through markers
  for (let i = 0; i < markers.length; i++) {
    //add marker
    addMarker(markers[i]);
  }

  //add marker function
  function addMarker(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      // icon: props.iconImage
    });

    if (props.iconImage) {
      //set icon image
      marker.setIcon(props.iconImage);
    }

    //check content
    if (props.content) {
      let infoWindow = new google.maps.infoWindow({
        content: props.content,
      });

      marker.addListener("click", function () {
        infoWindow.open(map, marker);
      });
    }
  }
}
