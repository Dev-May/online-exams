declare type SuccessfulResponse<T> = {
  message: "success";
} & T;

declare type ErrorResponse = {
  message: "string";
  code: number;
};

declare type PaginatedResponse<T> = {
  metadata: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
  };
} & T;

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;
