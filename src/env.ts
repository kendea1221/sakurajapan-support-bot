import dotenv from 'dotenv';

dotenv.config();

export function TOKEN(): string {
  if (process.env.TOKEN) {
    return process.env.TOKEN;
  } else {
    throw new Error('TOKEN is undefined.');
  }
}

export function APP_ID(): string {
  if (process.env.APP_ID) {
    return process.env.APP_ID;
  } else {
    throw new Error('APP_ID is undefined.');
  }
}

export function GUILD_ID(): string {
  if (process.env.GUILD_ID) {
    return process.env.GUILD_ID;
  } else {
    throw new Error('GUILD_ID is undefined.');
  }
}

export function CHANNEL_ID(): string {
  if (process.env.CHANNEL_ID) {
    return process.env.CHANNEL_ID;
  } else {
    throw new Error('CHANNEL_ID is undefined.');
  }
}