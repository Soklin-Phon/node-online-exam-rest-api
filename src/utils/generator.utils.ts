import * as redis from './redis.utils';

export const generateCode = async function (number: string): Promise<string> {
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += Math.floor(Math.random() * 9);
    }
    await redis.client.set(code, number);
    await redis.client.expire(code, 300);
    return new Promise((resolve, rejects) => {
        resolve(code);
    });
}

export const verifyCode = async function (number: string, code: string): Promise<boolean> {
    let result: boolean = false;
    
    result = await redis.client.get(code) == number;

    
    if (result) {
        const pipeline = redis.client.pipeline();
        pipeline.del(code);
        await pipeline.exec();
    }
    
    return new Promise((resolve, rejects) => {
        resolve(result);
    });
}
