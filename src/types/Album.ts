import { Image } from './Image';
import { Artist } from './Artist';

export interface Album {
    album_type: string;
    total_tracks: number;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    artists: Artist[];
}