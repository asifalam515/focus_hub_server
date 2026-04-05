export declare const AuthService: {
    signUpUser: (payload: any) => Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        avatar: string | null;
        points: number;
        achievements: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
};
//# sourceMappingURL=auth.servic.d.ts.map