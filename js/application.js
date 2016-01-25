$( function() {
  Weather.getCurrent( "Kansas City", function( current ) {
    $( ".weather .temperature" ).text( Weather.kelvinToFahrenheit( current.temperature() ).toFixed() + "°" );
    $( ".weather .conditions" ).text( current.conditions() );
  });

  Weather.getForecast( "Kansas City", function( forecast ) {
      $( [ 1, 2, 3, 4, 5 ] ).each( function( day ) {
      $( ".forecast-" + day + "-day" ).text( Date.create( "" + day + " day from now" ).format( "{dow}" ).toUpperCase() );
      $( ".forecast-" + day + "-high" ).text(
        Weather.kelvinToFahrenheit(
          forecast.day( "" + day + " day from now" ).high()
        ).toFixed()
      );
      $( ".forecast-" + day + "-low" ).text(
        Weather.kelvinToFahrenheit(
          forecast.day( "" + day + " day from now" ).low()
        ).toFixed()
      );
    } );
  } );
} );
