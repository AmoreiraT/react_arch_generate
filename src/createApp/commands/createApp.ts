import { execa } from "execa";

export const createApp = async (name: string): Promise<void> => {
    // const execa = (await import('execa')).default;

    await execa('npx', ['create-react-app', name], { stdio: 'inherit' });
}