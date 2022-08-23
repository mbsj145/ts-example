import COVID from "../source/models/covid";

describe("READ users", () => {
    it("Should return the list of users successfully", () => {
    
  
      const spy = jest.spyOn(COVID, "find").mockReturnValueOnce({ReportingCountry:"AT","dateFrom":"2020-W53","dateTo":"2022-W01"} as any);
      COVID.find({}).limit(10);
      const spyFetchedUsers = spy.mock.results[0].value;
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spyFetchedUsers).toHaveLength(2);
      spy.mockReset();
    });
  
  });