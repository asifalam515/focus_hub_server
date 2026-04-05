import { prisma } from "../../../lib/prisma";
const signUpUser = async (payload) => {
    const existingUser = await prisma.user.findUnique({
        where: { email: payload.email },
    });
    if (!existingUser) {
        await prisma.user.create({
            data: { payload },
        });
    }
    return signUpUser;
};
export const AuthService = {
    signUpUser,
};
// Implement your login logic here, e.g., verify user credentials
//# sourceMappingURL=auth.servic.js.map