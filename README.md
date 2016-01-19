# Economics Interactive Tutorials
## UCL Institute of Global Health

-------------------

## Introduction

This project involved the conversion of an aging interactive educational tool to a multi-platform modern web and mobile application with a contemporary look and feel. The architecture of the new application employed industry-standard programming practices as well as an academic consideration of software design patterns. Interaction design cues are taken from other popular electronic learning platforms, and the system architecture is intended to be concise and extensible. The final product is an easy-to-use learning tool, where familiar visual design elements and a friendly interface reduce the friction of engaging with the material.

## Requirements

Native builds have been tested on iOS devices running iOS 9.2 and Android devices running Android 5.1 Lollipop.  
The web version has been tested in recent versions of Safari, Chrome, and Firefox.

## Installation and Usage

### Development

Navigate into the source folder `/ionic_app` and run the command `ionic serve`. This should launch the app on `localhost:8100`. The Ionic server will refresh the page automatically when any files are saved.

### Deployment

To deploy the app on your server or web host, simply copy the folder containing all of the code, called “/www” in the root directory, or all of it’s content. You can also find all of the code in “/ionic_app/www”. Copy all of these files onto a folder on your webhost and rename the “/www” folder to whatever the URL endpoint should be. Then, navigate in the browser to “http://www.--your-url--/--endpoint--“, such as “http://www.ucl.ac.uk/globalhealth/economicstutorials”, if the folder had been renamed to “economicstutorials”. Since the rest of the app is run in the browser, that’s it - you’re done!

To deploy the app to a mobile device, use the appropriate [Ionic command line tool](http://ionicframework.com/docs/cli/run.html) to build or run for your device or emulator. Some of these functions are inherited from [Apache Cordova](https://cordova.apache.org/docs/en/latest/guide/overview/).

## Credits

This project was designed and built by students of UCL MSc Computer Science Dan Sturgess, Jason Gwartz, and Sophie Mugridge White.  
Educational content is provided by UCL Institute of Global Health and [Sam Baker](http://www.sambaker.com).


## License

This project is licensed under the MIT License. The educational content provided by [Sam Baker](http://www.sambaker.com) is licensed under  the [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/)