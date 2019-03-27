import {
  SEND_IMAGE_REQUEST,
} from './constants';

export const sendImage = (image, compCoef) => ({
  type: SEND_IMAGE_REQUEST,
  image,
  compCoef,
});
