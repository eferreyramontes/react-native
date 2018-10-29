React Native
============

# Components

* View / ScrollView / SafeAreaView
* Text / TextView
* Image / ImageBackground
* FlatList / SectionList
* Touchable Hightlight / Opacity / WithoutFeedback
* Animated 
* fetch, async, await, sockets
* Platform 
* AsyncStorage

# ¿Cuándo usar React-Native?

* Native ---> RCT Bridge ---> Javascript Core
* Hot/live reloadign: Aligera los tiempos de desarrollos
* Depuración de Javascript
* Inspector de elementos
* Network Inspector
* Stacktrace

# Clase 3

La aplicación se va a llamar Platzi-Video. Es una página offline :D (contenido y listas).

## Seteo del entorno

```bash
$ brew install node
$ brew install watchman
$ npm install -g react-native-cli
```

### Entorno para Android

Java Development Kit: `http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html`

Android Studio: `https://developer.android.com/studio/`

En el proceso de instalación ten estas opciones checkeadas, recuerda usar el modo personalizado:

* Android SDK
* Android SDK Platform
* Performance (Intel ® HAXM)
* Android Virtual Device

Ahora en SDK tools selecciona la versión 26.0.3

Finalmente, setea siguientes líneas en `$HOME/.bash_profile`:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Entorno para iOS

XCode: `https://itunes.apple.com/us/app/xcode/id497799835?mt=12`.

# Clase 7 - Proyecto nuevo en React Native y creación del emulador en AS

```bash
# Fist initialization
$ react-native -v

# Let starts the initialiation of the project
$ react-native init <NombreDelProyecto>

# Let's try it as an Android app
$ react-native run-android

# Or an IOs app
$ react-native run-ios
```

# Class 8 - Componentes en React Native

Elements: 
* View
* Text
* Image

# Class 10 - React Native Styles

Activate Hot Reload

# Class 11 - iPhone X Support: Header creation

# Class 12 - React Native Lists

# Class 13 - Recommendations structure

# Class 14 - Empty lists and separators

# Class 15 - Suggestions component

# Class 16 - API calls - Fetch

We are going to use this mock server for testing purposes: `https://www.yts.ag/`.

To take a look to what we are debugging, we will use the Android Remote JS Debugging that must be enabled in the emulator pressing <COMMAND> + M and then selecting the option *Debug JS Remotely*.

To make it work, first I needed to define the debugging url as follows;

1. Get into Dev menu CMD+M o CTRL+M
2. Go into *Dev Settings*.
3. Go to *Debugging* in *Debug Server Host & Port for Device*.
4. Write `localhost:8081`.
5. Go to your favorite browser and write `localhost:8081/debugger-ui`.

## Extra steps!! :@

If you really want to make it work, then you will need to accomplish the following steps;
```bash
$ mkdir android/app/src/main/assets # (in project directory)
$ react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
$ react-native run-android
```


Interesting links:
* Reactr Developer RoadMap: `https://github.com/adam-golab/react-developer-roadmap`.