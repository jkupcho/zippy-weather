import reducer, { addFavorite, select } from "./zipCodesSlice";
import { PayloadAction } from "@reduxjs/toolkit";

describe("zipCodesSlice", () => {
  it("should have sensible defaults", () => {
    expect(reducer(undefined, {} as PayloadAction)).toEqual({
      selected: "",
      favorites: [],
    });
  });

  it("should update selected", () => {
    const previousState = {
      selected: "",
      favorites: ["blah"],
    };
    expect(reducer(previousState, select("blah"))).toEqual({
      selected: "blah",
      favorites: ["blah"],
    });
  });

  it("should add new and update selected", () => {
    const previousState = {
      selected: "",
      favorites: [],
    };
    expect(reducer(previousState, addFavorite("blah"))).toEqual({
      selected: "blah",
      favorites: ["blah"],
    });
  });
});
