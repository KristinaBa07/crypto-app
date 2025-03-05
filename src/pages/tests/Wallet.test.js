import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Wallet from "../Wallet";

test("removes an asset from the wallet", async () => {
    render(<Wallet />);
  
    const assetInput = screen.getByPlaceholderText(/Asset name/i);
    const amountInput = screen.getByPlaceholderText(/Amount/i);
    const addButton = screen.getByText(/Add Asset/i);
    const removeButton = screen.getByText(/Remove Asset/i);
  
    
    fireEvent.change(assetInput, { target: { value: "bitcoin" } });
    fireEvent.change(amountInput, { target: { value: "2" } });
    fireEvent.click(addButton);
  
    
    expect(screen.getByText(/bitcoin: 2/i)).toBeInTheDocument();
  
    
    fireEvent.change(assetInput, { target: { value: "bitcoin" } });
    fireEvent.change(amountInput, { target: { value: "2" } });
    fireEvent.click(removeButton);
  
    
    await new Promise((r) => setTimeout(r, 100));
  
   
    expect(screen.queryByText(/bitcoin: 2/i)).not.toBeInTheDocument();
});