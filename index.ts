// 1. Alias de tipos: Definir tipos personalizados para manejar información de usuarios

type UserID = number;
type UserName = string;

type User = {
    id: UserID;
    name: UserName;
    role: UserRole;
};

// 2. Enum: Definir los roles disponibles

enum UserRole {
    ADMIN = "Admin",
    USER = "User",
    GUEST = "Guest",
}

// 3. Función para crear un nuevo usuario usando los tipos y enum definidos

function createUser(id: UserID, name: UserName, role: UserRole): User {
    return { id, name, role };
}

// 4. Crear y mostrar usuarios con diferentes roles

const adminUser = createUser(1, "Alice", UserRole.ADMIN);
const regularUser = createUser(2, "Bob", UserRole.USER);
const guestUser = createUser(3, "Charlie", UserRole.GUEST);

console.log(adminUser);
console.log(regularUser);
console.log(guestUser);
