import { Payload } from 'payload';
import { CollectionAfterChangeHook, CollectionConfig } from 'payload/types';

export type ShaggleConfig = {
    disableCollections?: string[]
}