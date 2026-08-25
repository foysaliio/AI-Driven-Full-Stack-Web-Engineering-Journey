// Narrowing safely identifies a specific type.

const formatValue = (value: string | number): string => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return value.toFixed(2);
};

console.log(formatValue("TypeScript"));

console.log(formatValue(95.567));

// Discriminated union

type ApiState =
  | {
      status: "loading";
    }
  | {
      status: "success";
      data: string;
    }
  | {
      status: "error";
      message: string;
    };

const handleState = (state: ApiState): void => {
  if (state.status === "success") {
    console.log(state.data);
  } else if (state.status === "error") {
    console.log(state.message);
  } else {
    console.log("Loading...");
  }
};

// Type assertion

const input = document.querySelector("#username") as HTMLInputElement;
console.log(input?.value);
