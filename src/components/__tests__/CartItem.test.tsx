// src/components/__tests__/CartItem.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { CartItem } from "../cart/CartItem";
import { CartContext } from "@/app/context/CartContext";
import { Game } from "@/utils/endpoint";

const mockGame: Game = {
  id: "2",
  name: "Cyberpunk 2077",
  description: "Futuristic RPG",
  genre: "RPG",
  price: 59.99,
  image: "https://example.com/cyberpunk.jpg",
  isNew: false,
};

describe("CartItem", () => {
  it("should call remove when clicking X button", () => {
    const removeMock = jest.fn();

    render(
      <CartContext.Provider
        value={{
          items: [mockGame],
          toggle: jest.fn(),
          remove: removeMock,
          inCart: () => true,
        }}
      >
        <CartItem {...mockGame} />
      </CartContext.Provider>
    );

    const button = screen.getByRole("button", { name: /remove item/i });
    fireEvent.click(button);

    expect(removeMock).toHaveBeenCalledWith("2");
  });
});
