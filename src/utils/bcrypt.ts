import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export function encodePassword(password: string): string {
    return bcrypt.hashSync(password, saltOrRounds);
}

export function comparePassword (password: string, hash: string) {
    return bcrypt.compare(password, hash);
}
