import SpotifyWebApi from 'spotify-web-api-js';
import { Artist } from '../types/Artist';

class SpotifyService {
    private spotify: SpotifyWebApi.SpotifyWebApiJs;
    private authEndpoint: string;
    private redirectUri: string;
    private clientId: string;
    private scopes: string[];
    public loginUrl: string;

    constructor() {
        this.spotify = new SpotifyWebApi();
        this.authEndpoint = 'https://accounts.spotify.com/authorize';
        this.redirectUri = window.location.origin;
        this.clientId = '5140bf1bf57a4376813003af84e64a41';
        this.scopes = [
            'user-read-currently-playing',
            'user-read-recently-played',
            'user-read-playback-state',
            'user-top-read',
            'user-modify-playback-state'
        ];
        this.loginUrl = `${this.authEndpoint}?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=${this.scopes.join('%20')}&response_type=token&show_dialog=true`;
    }

    public setAccessToken(token: string): void {
        this.spotify.setAccessToken(token);
    }

    public getAccessToken(): string | null {
        return this.spotify.getAccessToken();
    }

    public getTokenFromUrl(): any {
        return window.location.hash
            .substring(1)
            .split('&')
            .reduce((initial: any, item: string) => {
                let parts = item.split('=');
                initial[parts[0]] = decodeURIComponent(parts[1]);
                return initial;
            }, {});
    }

    public async getMe(): Promise<any> {
        return await this.spotify.getMe();
    }

    public async getFavoriteArtists(): Promise<Artist[]> {
        const response = await this.spotify.getFollowedArtists();
        const artists = response.artists.items.map((item: any) => {
            const artist: Artist = {
                id: item.id,
                name: item.name,
                image: item.images[0]
            };
            return artist;
        });
        return artists;
    }

    public async getNewReleases(): Promise<any> {
        return await this.spotify.getNewReleases();
    }

    public async getNowPlaying(): Promise<any> {
        return await this.spotify.getMyCurrentPlaybackState();
    }

    public async play(albumUri: string): Promise<any> {
        return await this.spotify.play({ "context_uri": `spotify:album:${albumUri}` });
    }

    public async pause(): Promise<any> {
        return await this.spotify.pause();
    }
}

const spotifyService = new SpotifyService();
export default spotifyService;