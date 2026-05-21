import { User } from "../../entities";
import { UserRepository } from "../../repositories";
import AuthRepository from "../../repositories/AuthRepository/AuthRepository";

const AuthService = {
    register: async (user: User): Promise<User> => {
        const userExist = UserRepository.findByUsername(user.username);
        if (userExist) {
            throw new Error("El usuario ya existe");
        }
        const id = UserRepository.create(user);
        if (id === undefined) {
            throw new Error("No se puede crear");
        }
        const newUser: User = { ...user, id };
        await AuthRepository.save(newUser);
        return newUser;
    }
};

export default AuthService;