import axios, { AxiosResponse } from 'axios';
import { appConfig } from './app-config';
import { UploadResponse } from './cat';

export const uploadFile = async (
  file: File,
): Promise<[res: AxiosResponse<UploadResponse> | null, err: Error | null]> => {
  const url = `${appConfig.baseUrl}/images/upload`;
  const headers = { 'x-api-key': appConfig.xApiKey };
  const data = new FormData();
  data.append('file', file);

  try {
    const res = await axios.post(url, data, { headers: headers });
    return [res, null];
  } catch (error) {
    return [null, error];
  }
};
