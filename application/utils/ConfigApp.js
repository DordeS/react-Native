
//////////////////// CONFIG APP

import Constants from 'expo-constants';

const isStandAloneApp = Constants.appOwnership == "standalone";

const ConfigApp = {

    // backend url
    URL: "https://footilab.com/",

    // facebook page url
    FACEBOOK: "https://www.facebook.com/Footilab-106727411461165",

    // youtube page url
    YOUTUBE: "https://youtube.com",

    // twitter page url
    TWITTER: "https://twitter.com",

    // twitter page url
    INSTAGRAM: "https://www.instagram.com/bravefitsoccer/",

    // banner admob unit id
    BANNER_ID: "ca-app-pub-4232853679195184/4472153551",
    
    // testdevice id, DON'T CHANGE IT
    TESTDEVICE_ID : isStandAloneApp?"EMULATOR" : "EMULATOR"
};

export default ConfigApp;
