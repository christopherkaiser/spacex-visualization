import httpService from '../services/httpService';

const endPoint = '/launches';

const getLaunches = async (callback) => {
  callback((await httpService.get(endPoint)).data);
};

export default {
  getLaunches,
};
