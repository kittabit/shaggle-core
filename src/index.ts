import { Config, Plugin } from 'payload/config';
import { ShaggleConfig } from './types';

// Collections
import Attractions from './collections/Attractions';
import Media from './collections/Media';
import News from './collections/News';
import Pages from './collections/Pages';
import Rooms from './collections/Rooms';
import GolfCourses from './collections/GolfCourses';
import Properties from './collections/Properties';
import Careers from './collections/Careers';

// Globals
import DeveloperSettings from './globals/DeveloperSettings';
import GlobalSettings from './globals/GlobalSettings';
import Navigation from './globals/Navigation';
import BookingEngineSettings from './globals/BookingEngine';

const shaggleCore = (incomingShaggleConfig: ShaggleConfig) => (incomingConfig: Config): Config => {

    const shagConfig: ShaggleConfig = {
        ...incomingShaggleConfig,
    };

    const collections = [
        ...incomingConfig?.collections || [],
        Media,
        Pages,
        News,
        Attractions,            
        GolfCourses,
        Properties,
        Rooms,
        Careers,
    ].filter(collection => {
        return !shagConfig.disableCollections?.includes(collection.slug);
    });

    const config: Config = {
        ...incomingConfig,
        collections,
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