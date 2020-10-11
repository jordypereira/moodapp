import { mount  } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import Mood from '@/components/Mood.vue'

describe('Home.vue', () => {
  it('renders correct text when pressing mood', async () => {
    const wrapper = mount(Home)
    const button = wrapper.findComponent(Mood)
    const moodText = button.props('title');
    const text = wrapper.find('p')
    const today = wrapper.vm.today;
    expect(text.text()).toMatch(`Your mood for ${today} is:`)

    await button.trigger('click')


    expect(text.text()).toMatch(`Your mood for ${today} is: ${moodText}`)
  })
})
