import { AttendingModule } from './attending.module';

describe('AttendingModule', () => {
  let attendingModule: AttendingModule;

  beforeEach(() => {
    attendingModule = new AttendingModule();
  });

  it('should create an instance', () => {
    expect(attendingModule).toBeTruthy();
  });
});
