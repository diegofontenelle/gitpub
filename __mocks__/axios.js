export default {
  create: config => ({
    ...config,
    get: jest.fn().mockResolvedValue({ data: { items: [] } }),
  }),
  get: jest.fn().mockResolvedValue({ data: { items: [] } }),
}
