import { shallowMount,  } from '@vue/test-utils'
import Mood from '@/components/Mood.vue'

describe('Mood.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'new message'
    const wrapper = shallowMount(Mood, {
      props: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
  it('Doesnt change style', () => {
    const title = 'new message'
    const wrapper = shallowMount(Mood, {
      props: { title }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
