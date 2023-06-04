describe("Bowling score calculator", () => {
  it("calculates the score for missed frames", () => {
    // arrange
    const missedFrames = [
      [5, 4],
      [5, 4],
      [5, 4],
      [5, 4],
      [5, 4],
      [5, 4],
      [5, 4],
      [5, 4],
      [5, 4],
      [5, 4],
    ];
    // act
    const result = calculateBowlingScore(missedFrames);

    // assert
    expect(result).toEqual(90);
  });
});
