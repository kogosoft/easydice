export class Utils {
    public static GetRandomNumber(max: number) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }
  }

export enum Color {
    white = 0,
    red = 384,
    orange = 320,
    yellow = 256,
    green = 192,
    blue = 128,
    purple = 64
  }
