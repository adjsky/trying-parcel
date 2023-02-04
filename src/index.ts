export const helloWorld = () => {
  console.log("Hello, World!");
};

export const asyncHelloWorld = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log("Hello, World!");
};

export class TestClass {
  private field = "wqe";
}

export default helloWorld;
