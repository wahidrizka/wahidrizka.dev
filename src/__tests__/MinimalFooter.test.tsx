/// <reference types="vitest/globals" />

import React from "react";
import { render, screen } from "@testing-library/react";
import { MinimalFooter } from "@/components/navigations/MinimalFooter";
import { Text } from "@primer/react-brand";

describe("MinimalFooter", () => {
  it("renders default copyright text", () => {
    render(
      <MinimalFooter>
        <MinimalFooter.Footnotes>
          <Text>Built by Wahid</Text>
        </MinimalFooter.Footnotes>
      </MinimalFooter>
    );

    const copyright = screen.getByText(/All rights reserved\./i);
    expect(copyright).toBeInTheDocument();
  });
});
