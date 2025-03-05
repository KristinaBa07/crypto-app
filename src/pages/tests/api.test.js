import { getAssets, getAssetDetail, getAssetHistory } from "../../services/api";
import axios from "axios";

jest.mock("axios");


jest.spyOn(console, "error").mockImplementation(() => {});


test("fetches asset list from API", async () => {
  axios.get.mockResolvedValue({
    data: {
      data: [{ id: "bitcoin", name: "Bitcoin", priceUsd: "45000.00" }]
    }
  });

  const assets = await getAssets();
  expect(assets).toEqual([{ id: "bitcoin", name: "Bitcoin", priceUsd: "45000.00" }]);
});

test("fetches asset details from API", async () => {
  axios.get.mockResolvedValue({
    data: {
      data: { id: "bitcoin", name: "Bitcoin", priceUsd: "45000.00" }
    }
  });

  const asset = await getAssetDetail("bitcoin");
  expect(asset).toEqual({ id: "bitcoin", name: "Bitcoin", priceUsd: "45000.00" });
});

test("fetches asset price history from API", async () => {
  axios.get.mockResolvedValue({
    data: {
      data: [
        { time: 1640995200000, priceUsd: "45000.00" },
        { time: 1641081600000, priceUsd: "46000.00" }
      ]
    }
  });

  const history = await getAssetHistory("bitcoin");
  expect(history).toEqual([
    { time: expect.any(String), price: 45000 },
    { time: expect.any(String), price: 46000 }
  ]);
});

test("handles API errors gracefully", async () => {
  axios.get.mockRejectedValue(new Error("API error"));

  const assets = await getAssets();
  expect(assets).toEqual([]);

  const assetDetail = await getAssetDetail("bitcoin");
  expect(assetDetail).toBeNull();

  const assetHistory = await getAssetHistory("bitcoin");
  expect(assetHistory).toEqual([]);
});