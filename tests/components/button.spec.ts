import { VueWrapper, mount } from '@vue/test-utils';
import Button from '@/components/common/Button.vue';

describe('Button', () => {
    let wrapper: VueWrapper<any>;

    beforeEach(() => {
        wrapper = mount(Button, {
            props: {
                primary: true,
                isDisabled: false,
            },
            slots: {
                default: 'Click Me',
            },
        });
    });

    it('renders primary button', () => {
        expect(wrapper.classes()).toContain('bg-blue');
        expect(wrapper.classes()).toContain('text-white');
        expect(wrapper.classes()).toContain('px-4');
        expect(wrapper.classes()).toContain('py-3');
        expect(wrapper.classes()).toContain('border-blue-dark');
    });

    it('renders secondary button', async () => {
        await wrapper.setProps({ primary: false, secondary: true });
        expect(wrapper.classes()).toContain('bg-white');
        expect(wrapper.classes()).toContain('text-blue');
        expect(wrapper.classes()).toContain('px-3');
        expect(wrapper.classes()).toContain('py-2');
        expect(wrapper.classes()).toContain('border-light-gray');
    });

    it('renders disabled button', async () => {
        await wrapper.setProps({ isDisabled: true });
        expect(wrapper.classes()).toContain('border-gray');
    });

    it('emits click event when button is clicked', async () => {
        await wrapper.find('button').trigger('click');
        expect(wrapper.emitted('handle:click')).toBeTruthy();
    });
});