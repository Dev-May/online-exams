import { AuthenticationError } from "./app-errors";

export default async function catchError<T>(
  callback: () => Promise<APIResponse<T>>
): Promise<[SuccessfulResponse<T> | null, string | null]> {
  try {
    const payload = await callback();

    if ("code" in payload) {
      throw new AuthenticationError(payload.message);
    }

    return [payload, null];
  } catch (error) {
    return [null, (error as Error).message];
  }
}
