import axios, { AxiosResponse } from 'axios';
import { appConfig } from './app-config';
import { UploadResponse } from './cat-types';

export const uploadFile = async (
  file: File,
): Promise<[res: AxiosResponse<UploadResponse> | null, err: Error | null]> => {
  const url = `${appConfig.baseUrl}/images/upload`;
  const headers = { 'x-api-key': appConfig.xApiKey };
  const data = new FormData();
  data.append('file', file);
  data.append('sub_id', appConfig.subId);
  return await axios.post(url, data, { headers: headers });
};
