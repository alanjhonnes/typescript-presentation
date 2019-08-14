export interface User {
    id?: string;
    name: string;
    email: string | null;
}

export type ConstantUser = Readonly<User>;

export type PartialUser = Partial<User>;

export type RequiredUser = Required<User>;

export type UserId = Pick<RequiredUser, "id">;

export type InsertUser = Omit<User, "id">;
