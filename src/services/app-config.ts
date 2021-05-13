// TODO: Add sub_id as per cat api id for individual
// NOTE: this would be set at login time
interface AppConfig {
  baseUrl: string;
  xApiKey: string;
  imageSize: number;
  subId: string;
}

export const appConfig: AppConfig = {
  baseUrl: 'https://api.thecatapi.com/v1',
  xApiKey: 'a727925c-68b0-4a92-b790-e355b2c28c9c',
  // NOTE: imageSize should be the same as width in tachyons-ext.css .grid-container div.cat-card
  imageSize: 150,
  subId: 'pjsvis',
};
