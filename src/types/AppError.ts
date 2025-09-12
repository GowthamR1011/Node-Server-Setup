export class AppError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;

    // Fix prototype chain
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
