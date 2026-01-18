import fs from 'fs';
import path from 'path';

const logFile = path.join(process.cwd(), 'debug.log');

export const debugLog = (message: string) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    fs.appendFileSync(logFile, logMessage);
    console.log(message); // Still log to console just in case
};
