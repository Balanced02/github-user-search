import {
  renderHook,
} from "@testing-library/react";
import { useDebounce } from "../../hooks";


describe("useDebounce", () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  it('should call function after the passed delay time', () => {
    const { result } = renderHook(() => useDebounce('test'))
    const spy = jest.fn()
    result.current.debounce(spy, 5)()
    expect(spy).toBeCalledTimes(0)
    jest.advanceTimersByTime(5)
    expect(spy).toBeCalledTimes(1)
  })
});
