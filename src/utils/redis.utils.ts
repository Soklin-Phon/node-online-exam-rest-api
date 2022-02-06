import ioRedis = require('ioredis');

const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PORT = process.env.REDIS_PORT || '6379';

let commonOptions: ioRedis.RedisOptions = {};

commonOptions = {
    host: REDIS_HOST,
    port: REDIS_PORT,
};

const options = Object.assign(
    {
        db: '1',
        keyPrefix: 'exam',
    },
    commonOptions
);

export const client = new ioRedis(options);
client.on('error', (err: Error) => {
  console.error('Store Redis error: ' + err);
});
client.on('connect', () => {
  console.log('Store connected to redis');
});