describe("pow", function() {

    before(() => alert("테스트를 시작합니다 - 테스트가 시작되기 전"));
    after(() => alert("테스트를 종료합니다 - 테스트가 종료된 후"));
  
    beforeEach(() => alert("단일 테스트를 시작합니다 - 각 테스트 시작 전"));
    afterEach(() => alert("단일 테스트를 종료합니다 - 각 테스트 종료 후"));

    it("2를 세 번 곱하면 8입니다.", function() {
      assert.equal(pow(2, 3), 8);
    });
  
    it("3을 네 번 곱하면 81입니다.", function() {
      assert.equal(pow(3, 4), 81);
    });
  
    it("n이 음수일 때 결과는 NaN입니다.", function() {
        assert.isNaN(pow(2, -1));
    });

    it("n이 정수가 아닐 때 결과는 NaN입니다.", function() {
        assert.isNaN(pow(2, 1.5));
    });
});

// 참고
// assert.equal(value1, value2) – value1과 value2의 동등성을 확인합니다(value1 == value2).
// assert.strictEqual(value1, value2) – value1과 value2의 일치성을 확인합니다(value1 === value2).
// assert.notEqual, assert.notStrictEqual – 비 동등성, 비 일치성을 확인합니다.
// assert.isTrue(value) – value가 true인지 확인합니다(value === true).
// assert.isFalse(value) – value가 false인지 확인합니다(value === false).

