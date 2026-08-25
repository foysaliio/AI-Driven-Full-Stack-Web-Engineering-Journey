// Conditional types work like type-level conditions.

type IsString<T> = T extends string ? "Yes" : "No";

type Result1 = IsString<string>;

type Result2 = IsString<number>;

const result1: Result1 = "Yes";

const result2: Result2 = "No";

console.log(result1);
console.log(result2);

// Practical example

type ApiResult<T> = T extends Error
  ? {
      success: false;
      error: T;
    }
  : {
      success: true;
      data: T;
    };

type UserResult = ApiResult<string>;

type ErrorResult = ApiResult<Error>;
