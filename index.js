// 1. Alias de tipos: Definir tipos personalizados para manejar información de usuarios
// 2. Enum: Definir los roles disponibles
let UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "Admin";
    UserRole["USER"] = "User";
    UserRole["GUEST"] = "Guest";
})(UserRole || (UserRole = {}));
// 3. Función para crear un nuevo usuario usando los tipos y enum definidos
function createUser(id, name, role) {
    return { id: id, name: name, role: role };
}
// 4. Crear y mostrar usuarios con diferentes roles
let adminUser = createUser(1, "Alice", UserRole.ADMIN);
let regularUser = createUser(2, "Bob", UserRole.USER);
let guestUser = createUser(3, "Charlie", UserRole.GUEST);
console.log(adminUser);
console.log(regularUser);
console.log(guestUser);
