import { User } from "../../entities";
import { UserRepository } from "../../repositories";
import AuthRepository from "../../repositories/AuthRepository/AuthRepository";

const AuthService = {

    register: async (user: User): Promise <User> => {

        const userExist = UserRepository.findByUsername(user.username);

        if (userExist) {
            console.error(`Ya existe el usuario: ${user.username}`);
            throw new Error("El usuario ya existe");
        }

        const id = UserRepository.create(user);

        if (id === undefined) {
            console.error(`No se pudo crear el usuario: ${user.username}`);
            throw new Error("No se puede crear");
        }

        const newUser: User = {
            ...user,
            id
        };

        await AuthRepository.save(user);



        return newUser;
    }
};

export default AuthService;