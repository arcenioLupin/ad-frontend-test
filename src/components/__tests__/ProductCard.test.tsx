import { render, screen, fireEvent } from "@testing-library/react";
import { ProductCard } from "../ProductCard";
import { CartProvider } from "@/app/context/CartContext";

const mockGame = {
  id: "1",
  name: "Cyberpunk 2077",
  genre: "Action",
  description: "Test game",
  image: "/test.jpg",
  price: 59.99,
  isNew: true,
};

describe("ProductCard", () => {
  it("should toggle between ADD TO CART and REMOVE", () => {
    render(
      <CartProvider>
        <ProductCard {...mockGame} />
      </CartProvider>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("ADD TO CART");

    fireEvent.click(button);
    expect(button).toHaveTextContent("REMOVE");

    fireEvent.click(button);
    expect(button).toHaveTextContent("ADD TO CART");
  });
});
