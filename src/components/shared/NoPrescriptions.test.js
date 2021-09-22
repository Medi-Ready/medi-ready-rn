import React from "react";
import { render, cleanup } from "@testing-library/react-native";

import NoPrescriptions from "./NoPrescriptions";

describe(">>> COMPONENT --- NO PRESCRIPTION", () => {
  afterEach(() => {
    cleanup();
  });

  it("+++ render default text", () => {
    const { getByText } = render(<NoPrescriptions />);

    const text = getByText("아직 유효한 처방전이 없습니다! 😥");

    expect(text).toBeTruthy();
  });
});
