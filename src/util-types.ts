export interface User {
    id?: string;
    name: string;
    email: string | null;
}

type ConstantUser = Readonly<User>;

type PartialUser = Partial<User>;

type RequiredUser = Required<User>;

type UserId = Pick<RequiredUser, "id">;

type InsertUser = Omit<User, "id">;
