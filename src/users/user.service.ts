import { UserType } from "./types/user.types";
import UserModel from './user.schema'

export class UserService {

    async create(user: UserType) {
        const createdUser = await UserModel.create(user)

        return createdUser
    }

    async list() {
        const userList = await UserModel.find()

        return userList
    }

    async find(id) {
        const findedUser = await UserModel.findById(id)

        return findedUser;
    }

    async update(id, dataToUpdate: UserType) {
        const updatedUser = await UserModel.findOneAndUpdate({_id: id}, {
            firstName: dataToUpdate.firstName,
            lastName: dataToUpdate.lastName,
            email: dataToUpdate.email,
            age: dataToUpdate.age,
        }, {new: true})

        return updatedUser;
    }

    async remove(id) {
       await UserModel.findOneAndDelete({_id : id})
    }
}