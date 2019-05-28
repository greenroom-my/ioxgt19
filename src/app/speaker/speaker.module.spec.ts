import { SpeakerModule } from './speaker.module';

describe('SpeakerModule', () => {
  let speakerModule: SpeakerModule;

  beforeEach(() => {
    speakerModule = new SpeakerModule();
  });

  it('should create an instance', () => {
    expect(speakerModule).toBeTruthy();
  });
});
