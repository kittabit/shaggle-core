import { Config, Plugin } from 'payload/config';

// Collections
import Attractions from './collections/Attractions';
import Media from './collections/Media';
import News from './collections/News';
import Pages from './collections/Pages';
import Rooms from './collections/Rooms';
import GolfCourses from './collections/GolfCourses';
import Properties from './collections/Properties';

// Globals
import DeveloperSettings from './globals/DeveloperSettings';
import GlobalSettings from './globals/GlobalSettings';
import Navigation from './globals/Navigation';
import BookingEngineSettings from './globals/BookingEngine';

const shaggleCore: Plugin = (incomingConfig: Config): Config => {
    const config: Config = {
        ...incomingConfig,
        collections: [
            ...incomingConfig?.collections || [],
            Pages,
            News,
            Media,
            Attractions,            
            GolfCourses,
            Properties,
            Rooms,
        ],
        globals: [
            ...incomingConfig?.globals || [],            
            GlobalSettings,
            Navigation,
            BookingEngineSettings,
            DeveloperSettings,
        ],
    };
    
    return config;
};

export default shaggleCore;