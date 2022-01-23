/*Load map*/
mapboxgl.accessToken = 'pk.eyJ1IjoiYnJlZXplb25saW5lIiwiYSI6ImNreHRyZXM2dDVvbGQydXE5aXY3YmhhYmYifQ.kaiXUuz6YUGojIFzv-_YCQ';

/**
 * Add the map to the page
 */
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-114.065465, 51.046095],
  zoom: 5,
  scrollZoom: false,
});

map.on('load', function () {
  map.resize();
});

const stores = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-112.801568, 49.683748]
      },
      'properties': {
        'propertyName': 'Location 1',
        'phoneFormatted': '(123)-456-7890',
        'phone': '1234567890',
        'address': '2727 South Parkside Dr',
        'city': 'Lethbridge',
        'country': 'Canada',
        'postalCode': 'T1K 0C5',
        'province': 'AB'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-114.089133, 51.005123]
      },
      'properties': {
        'propertyName': 'Location 2',
        'phoneFormatted': '(123)-456-7890',
        'phone': '1234567890',
        'address': '5900 Elbow Dr SW',
        'city': 'Calgary',
        'country': 'Canada',
        'postalCode': 'T2V 1H7',
        'province': 'AB'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-113.493043, 53.468986]
      },
      'properties': {
        'propertyName': 'Location 3',
        'phoneFormatted': '(123)-456-7890',
        'phone': '1234567890',
        'address': '3414 Gateway Boulevard',
        'city': 'Edmonton',
        'country': 'Canada',
        'postalCode': 'T6J 6Z2',
        'province': 'AB'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-113.839474, 52.263627]
      },
      'properties': {
        'propertyName': 'Location 4',
        'phoneFormatted': '(123)-456-7890',
        'phone': '1234567890',
        'address': '4500 Fountain Drive',
        'city': 'Red Deer',
        'country': 'Canada',
        'postalCode': 'T4N 6W8',
        'province': 'AB'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-122.989773, 49.201111]
      },
      'properties': {
        'propertyName': 'Location 5',
        'phoneFormatted': '(123)-456-7890',
        'phone': '1234567890',
        'address': '9001 Riverway Pl.',
        'city': 'Burnaby',
        'country': 'Canada',
        'postalCode': 'V5J 3J1',
        'province': 'BC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-123.05177, 49.213855]
      },
      'properties': {
        'propertyName': 'Location 6',
        'phoneFormatted': '(123)-456-7890',
        'phone': '1234567890',
        'address': '7800 Vivian Drive Vancouver',
        'city': 'Vancouver',
        'country': 'Canada',
        'postalCode': 'V5S 2V9',
        'province': 'BC'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-104.775245, 50.979099]
      },
      'properties': {
        'propertyName': 'Location 7',
        'phoneFormatted': '(123)-456-7890',
        'phone': '1234567890',
        'address': 'Longlaketon 219',
        'city': 'Saskatchewan',
        'country': 'Canada',
        'postalCode': 'S0G 1J0',
        'province': 'SK'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-115.366182, 51.100696]
      },
      'properties': {
        'propertyName': 'Location 8',
        'phoneFormatted': '(123)-456-7890',
        'phone': '1234567890',
        'address': '2000 - 8 Avenue',
        'city': 'Canmore',
        'country': 'Canada',
        'postalCode': 'T1W 1Y2',
        'province': 'AB'
      }
    },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-106.659319, 52.07715]
        },
        'properties': {
          'propertyName': 'Location 9',
          'phoneFormatted': '(123)-456-7890',
          'phone': '1234567890',
          'address': '382 Cartwright Street',
          'city': 'Saskatoon',
          'country': 'Canada',
          'postalCode': 'S7T 1B1',
          'province': 'SK'
        }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-118.775068, 55.09355]
      },
      'properties': {
        'propertyName': 'Location 10',
        'phoneFormatted': '(123)-456-7890',
        'phone': '1234567890',
        'address': 'RR3 Site 4, Box 1',
        'city': 'Grande Prairie',
        'country': 'Canada',
        'postalCode': 'T8W 5K2',
        'province': 'AB'
      }
  },
  {
    'type': 'Feature',
    'geometry': {
      'type': 'Point',
      'coordinates': [-122.649976, 49.066794]
    },
    'properties': {
      'propertyName': 'Location 11',
      'phoneFormatted': '(123)-456-7890',
      'phone': '1234567890',
      'address': 'Langley Discgolf Park',
      'city': 'Langley',
      'country': 'Canada',
      'postalCode': 'V3A 4Y2',
      'province': 'BC'
    }
},
{
  'type': 'Feature',
  'geometry': {
    'type': 'Point',
    'coordinates': [-122.307701, 49.145461]
  },
  'properties': {
    'propertyName': 'Location 12',
    'phoneFormatted': '(123)-456-7890',
    'phone': '1234567890',
    'address': '14th Avenue',
    'city': 'Mission',
    'country': 'Canada',
    'postalCode': 'V2V 3T8',
    'province': 'BC'
  }
},
  ]
};

/**
 * Assign a unique id to each store. You'll use this `id`
 * later to associate each point on the map with a listing
 * in the sidebar.
 */
stores.features.forEach((store, i) => {
  store.properties.id = i;
});

/**
 * Wait until the map loads to make changes to the map.
 */
map.on('load', () => {
  /**
   * This is where your '.addLayer()' used to be, instead
   * add only the source without styling a layer
   */
  map.addSource('places', {
    'type': 'geojson',
    'data': stores
  });

  /**
   * Add all the things to the page:
   * - The location listings on the side of the page
   * - The markers onto the map
   */
  buildLocationList(stores);
  addMarkers();
});

/**
 * Add a marker to the map for every store listing.
 **/
function addMarkers() {
  /* For each feature in the GeoJSON object above: */
  for (const marker of stores.features) {
    /* Create a div element for the marker. */
    const el = document.createElement('div');
    /* Assign a unique `id` to the marker. */
    el.id = `marker-${marker.properties.id}`;
    /* Assign the `marker` class to each marker for styling. */
    el.className = 'marker';

    /**
     * Create a marker using the div element
     * defined above and add it to the map.
     **/
    new mapboxgl.Marker(el, { offset: [0, -23] })
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);

    /**
     * Listen to the element and when it is clicked, do three things:
     * 1. Fly to the point
     * 2. Close all other popups and display popup for clicked store
     * 3. Highlight listing in sidebar (and remove highlight for all other listings)
     **/
    el.addEventListener('click', (e) => {
      /* Fly to the point */
      flyToStore(marker);
      /* Close all other popups and display popup for clicked store */
      createPopUp(marker);
      /* Highlight listing in sidebar */
      const activeItem = document.getElementsByClassName('active');
      e.stopPropagation();
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      const listing = document.getElementById(
        `listing-${marker.properties.id}`
      );
      listing.classList.add('active');
    });
  }
}

/**
 * Add a listing for each store to the sidebar.
 **/
function buildLocationList(stores) {
  for (const store of stores.features) {
    /* Add a new listing section to the sidebar. */
    const listings = document.getElementById('listings');
    const listing = listings.appendChild(document.createElement('div'));
    /* Assign a unique `id` to the listing. */
    listing.id = `listing-${store.properties.id}`;
    /* Assign the `item` class to each listing for styling. */
    listing.className = 'item';

    /* Add the link to the individual listing created above. */
    const link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.id = `link-${store.properties.id}`;
    link.innerHTML = `${store.properties.address}`;

    /* Add details to the individual listing. */
    const details = listing.appendChild(document.createElement('a'));
    details.innerHTML = `${store.properties.city}`;
    if (store.properties.phone) {
      details.innerHTML += ` &middot; ${store.properties.phoneFormatted}`;
    }

    /**
     * Listen to the element and when it is clicked, do four things:
     * 1. Update the `currentFeature` to the store associated with the clicked link
     * 2. Fly to the point
     * 3. Close all other popups and display popup for clicked store
     * 4. Highlight listing in sidebar (and remove highlight for all other listings)
     **/
    link.addEventListener('click', function () {
      for (const feature of stores.features) {
        if (this.id === `link-${feature.properties.id}`) {
          flyToStore(feature);
          createPopUp(feature);
        }
      }
      const activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      this.parentNode.classList.add('active');
    });
  }
}

/**
 * Use Mapbox GL JS's `flyTo` to move the camera smoothly
 * a given center point.
 **/
function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15
  });
}

/**
 * Create a Mapbox GL JS `Popup`.
 **/
function createPopUp(currentFeature) {
  const popUps = document.getElementsByClassName('mapboxgl-popup');
  if (popUps[0]) popUps[0].remove();
  const popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML(
      `<h3>${currentFeature.properties.propertyName}</h3><h4>${currentFeature.properties.address}</h4>`
    )
    .addTo(map);
}
