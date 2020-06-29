import { shallowMount } from '@vue/test-utils';
import AppBar from '@/components/AppBar.vue';

describe('AppBar.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(AppBar, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
