import NasaInfo from './NasaInfo.vue';
import { shallowMount } from '@vue/test-utils';

describe('NasaInfo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(NasaInfo);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
