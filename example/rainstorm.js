(function(_) {
  _.rainStorm = {
    autoRain : false, // automatically rain on initiation
    fixRain : true, // fix raining to the viewpoint
    
    rainRate : 300, // spawn rate of droplets
    fallRate : 50, // falling rate of droplets
    maxDrops : 30, // droplets allowed on screen at once
    
    image : 'graphics/droplet-0.png', // rain drop image
    
    // audio settings
    audio : {
      enabled : true, // self explanatory
      mp3 : 'audio/rain.mp3', // mp3 file
      wav : 'audio/rain.wav', // wav file
      node : null, // audio node cache
      
      // play audio
      on : function() {
        if (!rainStorm.audio.node) {
          var a = document.createElement('AUDIO');
          a.autoplay = true;
          a.loop = true;
          a.innerHTML = '<source src="' + rainStorm.audio.mp3 + '" type="audio/mpeg" /><source src="' + rainStorm.audio.wav + '" type="audio/wav" />';
          rainStorm.audio.node = a;
          document.body.appendChild(a);
        } else rainStorm.audio.node.play();
      },
      
      // stop audio
      off : function() {
        rainStorm.audio.node.pause();
      }
    },
    
    // flash lightning
    lightning : {
      enabled : true, // self explanatory
      chance : 50, // chance for lightning to strike
      strikes : 0, // total number of strikes in a session
      node : null, // flash node cache
      
      // create a lightning flash
      flash : function() {
        if (!rainStorm.lightning.node) {
          var a = document.createElement('DIV');
          a.id = 'rS_lightning';
          rainStorm.lightning.node = a;
          document.body.appendChild(a);
        } else rainStorm.lightning.node.className = '';
        
        window.setTimeout(function() {
          rainStorm.lightning.node.className = 'rS_fade';
        }, 100);
        
        rainStorm.lightning.strikes++;
      }
    },
    
    raining : false, // self explanatory
    current : 0, // current drops in the DOM
    drops : 0, // total drops created
    nodes : {}, // node cache for individual droplets
    
    // create a rain drop
    RainDrop : function(id) {
      var nodes = rainStorm.nodes, reuse = false, i, node;
      
      // find a node cache to reuse
      for (i in nodes) {
        if (!nodes[i].actif) {
          node = nodes[i].node;
          reuse = true;
          id = i;
          break;
        }
      };
      
      // no recyclable rain drops ? Make a new one !
      if (!reuse) node = document.createElement(rainStorm.image ? 'IMG' : 'DIV');
      
      // reset/apply the rain drop attributes
      if (rainStorm.image) node.src = rainStorm.image;
      node.style.position = rainStorm.fixRain ? 'fixed' : 'absolute';
      node.style.top = '-' + Math.floor(Math.random() * 26) + '%';
      node.style.left = Math.floor(Math.random() * 100) + '%';
      node.className = 'rS_rainDrop';
      
      rainStorm.nodes[id] = {
        node : node,
        actif : true, // droplet is active ? Allows us to reuse the node
        
        remove : function() {
          var o = rainStorm.nodes[id];
          document.body.removeChild(o.node);
          window.clearInterval(o.move);
          o.actif = false;
          
          rainStorm.current--;
        },
        
        move : window.setInterval(function() {
          var o = rainStorm.nodes[id], n = +o.node.style.top.replace(/%/, '');
          n > 124 ? o.remove() : o.node.style.top = n + 1 + '%';
        }, rainStorm.fallRate)
      };
      
      document.body.appendChild(node);
      rainStorm.drops++;
      rainStorm.current++;
    },
    
    // start raining
    start : function() {
      if (rainStorm.raining) return console.log('It\'s already raining.. get an umbrella !');
      if (rainStorm.audio.enabled) rainStorm.audio.on();
      
      rainStorm.raining = true;
      rainStorm.rain = window.setInterval(function() {
        if (rainStorm.current < rainStorm.maxDrops) rainStorm.RainDrop('n' + rainStorm.drops);
        if (rainStorm.lightning.enabled) Math.floor(Math.random() * rainStorm.lightning.chance + 1) == rainStorm.lightning.chance && rainStorm.lightning.flash();
      }, rainStorm.rainRate);
    },
    
    // stop raining
    stop : function() {
      if (!rainStorm.raining) return console.log('The rain has already passed ..! Enjoy the sun !');
      if (rainStorm.audio.enabled) rainStorm.audio.off();
      
      rainStorm.raining = false;
      window.clearInterval(rainStorm.rain); 
    }
  };
  
  var style = document.createElement('STYLE');
  style.type = 'text/css';
  style.appendChild(document.createTextNode('.rS_rainDrop{-webkit-transition:100ms;-moz-transition:100ms;-o-transition:100ms;transition:100ms;z-index:9999;pointer-events:none}#rS_lightning {position:fixed;top:0;left:0;right:0;bottom:0;background-color:#FFF;background-color:rgba(255, 255, 255, 0.8);z-index:9999;pointer-events:none}#rS_lightning.rS_fade{background-color:transparent;visibility:hidden;-webkit-transition:500ms;-moz-transition:500ms;-o-transition:500ms;transition:500ms}div.rS_rainDrop{height:14px;width:1px;background:#9CF}'));
  document.getElementsByTagName('HEAD')[0].appendChild(style);
  
  rainStorm.autoRain && rainStorm.start(); // automatically rain based on settings
})(window);