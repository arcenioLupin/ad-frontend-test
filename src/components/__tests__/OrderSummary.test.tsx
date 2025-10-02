import { render, screen } from "@testing-library/react";
import { OrderSummary } from "../cart/OrderSummary";
import { CartContext } from "@/app/context/CartContext";
import { Game } from "@/utils/endpoint";

const mockGames: Game[] = [
  { id: "1", name: "Game 1", genre: "RPG", description: "", image: "", price: 10, isNew: false },
  { id: "2", name: "Game 2", genre: "Action", description: "", image: "", price: 20, isNew: false },
];

describe("OrderSummary", () => {
  it("should display correct total", () => {
    render(
      <CartContext.Provider
        value={{
          items: mockGames,
          toggle: jest.fn(),
          remove: jest.fn(),
          inCart: jest.fn(),
        }}
      >
        <OrderSummary />
      </CartContext.Provider>
    );

    // Verifica que aparezca el texto Total
    expect(screen.getByText("Order Total")).toBeInTheDocument();

    // Verifica que el total se calcule correctamente
    expect(screen.getByText("$30.00")).toBeInTheDocument();
  });
});
