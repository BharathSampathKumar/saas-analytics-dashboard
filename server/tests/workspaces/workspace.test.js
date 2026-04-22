const request = require('supertest');
const app = require('../../src/app');
const { registerAndLogin } = require('../helpers/authHelper');

describe('Workspace API', () => {
  let token;

  beforeEach(async () => {
    token = await registerAndLogin();
  });

  it('should create a workspace', async () => {
    const res = await request(app)
      .post('/api/workspaces')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'My Workspace' });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('My Workspace');
  });

  it('should fetch user workspaces', async () => {
    await request(app)
      .post('/api/workspaces')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Workspace 1' });

    const res = await request(app)
      .get('/api/workspaces')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });
});
