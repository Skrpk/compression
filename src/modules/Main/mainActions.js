import {
  SEND_IMAGE_REQUEST,
} from './constants';

export const sendImage = (image) => ({
  type: SEND_IMAGE_REQUEST,
  image,
});
