import { VueWrapper, mount } from '@vue/test-utils';
import TextField from '@/components/common/TextField.vue';

describe('TextField', () => {
    let wrapper: VueWrapper<any>;

    beforeEach(() => {
        wrapper = mount(TextField, {
            props: {
                name: 'test',
                value: 'initialValue',
                placeholder: 'Type something',
            },
        });
    });

    it('renders with correct initial props', () => {
        expect(wrapper.attributes('id')).toBe('test');
        expect(wrapper.attributes('placeholder')).toBe('Type something');
    });

    it('emits update:value event when input changes', async () => {
        const input = wrapper.find('input');
        await input.setValue('newInputValue');
        expect(wrapper.emitted('update:value')).toBeTruthy();
    });

    it('emits click:enter event when Enter key is pressed', async () => {
        const input = wrapper.find('input');
        await input.trigger('keydown.enter');
        expect(wrapper.emitted('click:enter')).toBeTruthy();
    });
});
