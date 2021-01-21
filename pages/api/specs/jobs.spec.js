import { createMocks } from "node-mocks-http";
import getJobs from "../jobs";
import jobs from "../../../data/jobs";

describe("Jobs Apis", () => {
  test("should get response status to be 200 on default get", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
      },
    });

    await getJobs(req, res);

    expect(res._getStatusCode()).toBe(200);
  });
  test("should get response on searching", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
      	search: "skin",
      },
    });

    await getJobs(req, res);

    expect(res._getStatusCode()).toBe(200);
  });
  test("should get every job as response on searching with blank", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
      	search: "",
      },
    });

    await getJobs(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData().length).toBe(20);
  });

  test("should get sorted response on multiple criteria", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        search: "asc",
        location: "asc",
        experience: "asc",
        role: "asc",
      },
    });

    await getJobs(req, res);

    expect(res._getStatusCode()).toBe(200);
  });
});
