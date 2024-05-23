import Counter from "../_components/Counter";

export const metadata = {
  title: "Cabins",
  description: "Our cozy cabins are waiting for you.",
};

const page = async () => {
  return (
    <div>
      <h1>Cabins Page</h1>

      <Counter />
    </div>
  );
};

export default page;
