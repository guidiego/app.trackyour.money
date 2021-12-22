import { Selector } from "testcafe";

fixture`Home Page`.page`http://localhost:3001`;

test("Home Test", async (t) => {
  await t.expect(Selector(".testlib").innerText).eql("HomePage");
});
