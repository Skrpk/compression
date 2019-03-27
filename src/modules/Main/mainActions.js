import {
  SEND_IMAGE_REQUEST,
} from './constants';

export const sendImage = (image, compCoef, callback) => ({
  type: SEND_IMAGE_REQUEST,
  image,
  compCoef,
  callback,
});
