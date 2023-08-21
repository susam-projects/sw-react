export abstract class AccessError {
  message = '';
}

export class MultipleRequestsError extends AccessError {
  override message = "Can't send a request when there's another one";
}
