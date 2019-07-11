"use strict"

var Cylon = require('cylon');

Cylon.robot({
	connections: {
		leapmotion: {adaptor: 'leapmotion'},
		sphero: {adaptor: 'sphero', port: 'COM3'}
	},

	devices: {
		leapmotion: {driver: 'leapmotion', connection: 'leapmotion'},
		sphero: {driver: 'sphero', connection: 'sphero'}
	},

	work: function(my){
        
      //(5).seconds();
	my.leapmotion.on("hand", function(hand) {
      //console.log(hand.palmPosition.join(","));
      //console.log(hand.palmPosition[0]+", "+ hand.palmPosition[2]);
      
      if(hand.palmPosition[1]<500){
      if (hand.palmPosition[2]>=20 && hand.palmPosition[2]<=300 && (hand.palmPosition[0]>=-30 && hand.palmPosition[0]<=30))
      {
      	console.log('Backward');
      	my.sphero.roll (150, 0);
      }
      else if (hand.palmPosition[2]>=-300 && hand.palmPosition[2]<=20 && (hand.palmPosition[0]>=-30 && hand.palmPosition[0]<=30))
      {
      	console.log('Forward');
      	my.sphero.roll (150, 180);
      }
      else if (hand.palmPosition[0]>=51 && hand.palmPosition[0]<=300 && (hand.palmPosition[2]>=20 && hand.palmPosition[2]<=80))
      {
      	console.log('Right');
      	my.sphero.roll (150, 270);
      }
      else if (hand.palmPosition[0]>=-300 && hand.palmPosition[0]<=-40 && (hand.palmPosition[2]>=20 && hand.palmPosition[2]<=80))
      {
      	console.log('Left');
      	my.sphero.roll (150, 90);
      }
        
      }
      else
      {
      	console.log('Stop');
      	my.sphero.stop();
      	//(1).seconds();
      }
    });
	}
}).start();