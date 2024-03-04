import { Request, Response } from 'express';
import { initReact } from '../initReact';

export const createProject = async (req: Request, res: Response) => {
  try {
    const { projectName, packageManager } = req.body;
    await initReact(projectName, packageManager);
    res.status(200).json({ message: 'Project created successfully!' });
  } catch (error: any) {
    res.status(500).json({ error: error?.message });
  }
};
