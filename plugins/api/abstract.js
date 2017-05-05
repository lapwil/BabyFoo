import axios from 'axios';

export default function (config = {}, ...rest) {
  const defaultConfig = {
    baseURL: `${process.env.baseUrl}/api`,
  };
  const instance = axios.create.call(this, Object.assign(defaultConfig, config), ...rest);

  instance.defaults.timeout = 30000;

  return instance;
}
