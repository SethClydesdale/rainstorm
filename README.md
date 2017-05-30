# Rainstorm
Rainstorm is, you guessed it, another script to rain images and elements in the browser window. Now, get your unbrellas ! Rainstorm is a flexible object, allowing you to change the settings mid-rain via the console or a panel you created. To make the rain feel even more immersive, audio and lightning flash settings are also included.

You can find a live example @ https://sethclydesdale.github.io/rainstorm/

## Getting started

Rainstorm is easy to install, requiring only a single script. You can add this script directly in your ``<head>`` section, or at the end of your ``<body>`` tag. Depending on your preferences, a [minified](https://github.com/SethClydesdale/rainstorm/blob/master/rainstorm.min.js) and [unminified](https://github.com/SethClydesdale/rainstorm/blob/master/rainstorm.js) version are available to you.

Read on for more information on how to execute and modify Rainstorm.

1. [Basic settings](#basic-settings)
2. [Audio settings](#audio-settings)
3. [Lightning settings](#lightning-settings)
4. [Rainstorm methods](#rainstorm-methods)


### Basic settings

Basic settings allow you to define the basic settings of a rain storm !

1. [autoRain](#autorain)
2. [fixRain](#fixrain)
3. [rainRate](#rainrate)
4. [fallRate](#fallrate)
5. [maxDrops](#maxdrops)
6. [image](#image)

#### autoRain

``autorain`` allows you to specify whether or not the Rainstorm should start directly after the object is created. This takes a boolean value of ``true`` or ``false``, setting it to true will automatically start the rain when the script executes. Note however, that the script should be placed in the ``<body>`` or a DOM ready event if this option is enabled. 

Can be modified once the object is created.
```javascript
rainStorm.autoRain = true; // enable autoRain

rainStorm.autoRain = false; // disable autoRain
```
Doesn't have much effect once the object is created, as it's meant for runtime.

#### fixRain

``fixRain`` allows you to choose if the rain should be fixed to the viewpoint or not. If set to ``true``, the rain will stay where it is, regardless of where you are on the page.

This setting can be modified after the object is created.
```javascript
rainStorm.fixRain = true; // fix the rain to the screen

rainStorm.fixRain = false; // rain remains absolute
```

#### rainRate

``rainRate`` specifies the spawn rate of new rain drops. Setting this to a low value will spawn droplets really faster, whereas a higher value will slow the spawn rate.

This setting can be modified after the object is created, but it requires stopping and starting the rainstorm to take effect.
```javascript
rainStorm.rainRate = 300; // default rainRate, 300ms

rainStorm.rainRate = 50; // fast rainRate

rainStorm.rainRate = 1000;// slow rainRate
```

#### fallRate

``fallRate`` specifies the falling speed of rain drops. Higher values have a slower fallRate whereas lower values have a faster fallRate.

This setting can be modified after the object is created.
```javascript
rainStorm.fallRate = 50; // default fallRate, 50ms

rainStorm.fallRate = 10; // faster fallRate

rainStorm.fallRate = 300; // slower fallRate
```

#### maxDrops

``maxDrops`` specifies the amount of rain drops that can be active in the DOM at once.

This setting can be modified after the object is created.
```javascript
rainStorm.maxDrops = 30; // default rain drops allowed

rainStorm.maxDrops = 300; // Many rain drops !

rainStorm.maxDrops = 5; // Just a drizzle !
```

#### image

``image`` allows you to specifiy and image for the rain drops. If no image is defined, a CSS fallback is used instead.

This setting can be modified after the object is created, however, if there was no image to begin with, the page will need to be reloaded as the fallback is a DIV.
```javascript
rainStorm.image = 'graphics/droplet-2.png'; // snow ?!
```


### Audio settings

Audio settings allow you to modify the audio settings of the storm !

1. [Enable audio](#enable-audio)
2. [mp3](#mp3)
3. [wav](#wav)

#### Enable audio

The ``enabled`` setting allows you to switch the audio on and off.

This setting can be modified after the object is created.
```javascript
rainStorm.audio.enabled = true; // enable the sound of the storm

rainStorm.audio.enabled = false; // disable the sound of the storm
```

#### mp3

``mp3`` specifies the url to an mp3 audio file.

Can be modified after the object is created, but would require page reload if the storm was already running.
```javascript
rainStorm.audio.mp3 = 'audio/rain.mp3'; // link to your mp3 file
```

#### wav

``wav`` specifies the url to a wav audio file.

Can be modified after the object is created, but would require page reload if the storm was already running.
```javascript
rainStorm.audio.wav = 'audio/rain.wav'; // link to your wav file
```

### Lightning settings

Lightning settings allow you to harness the power of lightning.

1. [Enable lightning](#enable-lightning)
2. [Chances](#chances)

#### Enable lightning

``enabled`` allows you to enable or disable the lightning flashes.

This setting can be modified after the object has been created.
```javascript
rainStorm.lightning.enabled = true; // enable lightning flashes

rainStorm.lightning.enabled = false; // disable lightning flashes
```

#### Chances

``chances`` allows you to specifiy how frequently the lightning flashes occur. Setting the value low makes them more frequent, whereas setting the value high makes them less frequent.

This setting can be modified after the object is created.
```javascript
rainStorm.lightning.chances = 50; // default chance

rainStorm.lightning.chances = 10; // high chance

rainStorm.lightning.chances = 500; // low chance
```

### Rainstorm methods

These methods can be invoked at anytime.

1. [rainStorm.start()](#rainstormstart)
2. [rainStorm.stop()](#rainstormstop)
3. [audio.on()](#audioon)
4. [audio.off()](#audiooff)
5. [lightning.flash()](#lightningflash)

#### rainStorm.start()

``start`` allows you to start the storm. If you have [autoRain](#autorain) disabled, you can start the storm with this method.
```javascript
rainStorm.start(); // start the rain storm
```

#### rainStorm.stop()

``stop`` allows you to stop the storm. Can be used for people that don't want to see it, or to reapply newly set settings.
```javascript
rainStorm.stop(); // stop the rain storm
```

#### audio.on()

``on`` allows you to play the audio.
```javascript
rainStorm.audio.on(); // play storm audio
```

#### audio.off()

``off`` allows you to pause the audio.
```javascript
rainStorm.audio.off(); // pause storm audio
```

#### lightning.flash()

``flash`` allows you to generate a flash of lightning.
```javascript
rainStorm.lightning.flash(); // flash lightning
```
