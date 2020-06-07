import { shallowMount } from '@vue/test-utils'
import Form from '@/pages/index.vue'

test('index', () => {
    const wrapper = shallowMount(Form)
    wrapper.setData({ name: ' '.repeat(7) })
    expect(wrapper.find('.error').exists()).toBe(true)
    wrapper.setData({ name: 'Документ' })
  })
