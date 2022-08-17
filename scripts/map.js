mapboxgl.accessToken = 'pk.eyJ1IjoiZW1pbHlhMzQiLCJhIjoiY2t1a3owMjd3MHl1NzJxbzZoMWJ3MG40MSJ9.v6edGzxjh6kuFepPABIdxA'; 
    const map = new mapboxgl.Map({
      container: 'map',
      // Replace YOUR_STYLE_URL with your style URL.
      style: 'mapbox://styles/emilya34/ckul53v967v8117nvjbw7y5yt', 
      center: [2.3364, 48.86091],
      zoom: 16
    });

    map.on('click', ({ point }) => {
        // If the user clicked on one of your markers, get its information.
        const features = map.queryRenderedFeatures(point, {
          layers: ['louvre-1'] // replace with your layer name
        });
        if (!features.length) {
          return;
        }
        const feature = features[0];
        const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
        .addTo(map);
        
      });


