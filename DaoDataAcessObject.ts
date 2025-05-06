// o design pattern data acess object serve para encapsular a lógica para lidar com um objeto em um banco de dados, o DAO é um objeto responsável por fazer operações de CRUD em uma 
// tabela específica, geralmente usado para encapsular a complexidade de um ORM e deixa-lo desaclopado, cada dao representa uma tabela no banco, diferente do repository. esse design pattern vem do java
class User {
    constructor(public username: string, public password: string) {}
}

interface UserDAO {
    getUserById(id: string): Promise<User | null>;
    createUser(user: User): Promise<void>;
    updateUser(user: User): Promise<void>;
    deleteUser(id: string): Promise<void>;
}

// DAO Implementation using SQL
class SqlUserDAO implements UserDAO {
    async getUserById(id: string): Promise<User | null> {
        return new User("example", "example");
    }

    async createUser(user: User): Promise<void> {
        // Insert user into database
    }

    async updateUser(user: User): Promise<void> {
        // Update user record
    }

    async deleteUser(id: string): Promise<void> {
        // Delete user from database
    }
}
