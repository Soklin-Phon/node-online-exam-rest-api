import { User } from '../models/user/user';
import { getRepository } from "typeorm";

export interface IUserPayload {
    name: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    enable: boolean;
    type: string;
}

export const getUsers = async (): Promise<Array<User>> => {
    const userRepository = getRepository(User);
    return userRepository.find();
};

export const createUser = async (payload: IUserPayload): Promise<User> => {
    const userRepository = getRepository(User);
    payload.type = "ONLINE";
    const user = new User();
    return userRepository.save({
        ...user,
        ...payload,
    });
};

export const getUser = async (id: number): Promise<User | null> => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ id: id });
    if (!user) return null;
    return user;
};

export const getUserByUsername = async (username: string): Promise<User | null> => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ username: username });
    if (!user) return null;
    return user;
};

export const getUserByPhone = async (phone: string): Promise<User | null> => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ phone: phone });
    if (!user) return null;
    return user;
};

export const updateUser = async (modifiedUser: User): Promise<User | null> => {
    const userRepository = getRepository(User);
    const user = await userRepository.save(modifiedUser);
    if (!user) return null;
    return user;
}
