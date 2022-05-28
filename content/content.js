const { reactive, computed } = Vue

const template = `
  <section>

    <label>
      {{ state.message }}
    </label>

    <div>
      <button @click="click()">OK</button>
    </div>

  </section>
`

export default {
  template,

  data () {
    return {
      clickCount: 0,
      clickedAt: null
    }
  },

  setup () {
    const state = reactive({
       clickCount: 0,

       clickedAt: null,

       message: computed(() => {
         const { clickCount, clickedAt } = state
         return clickedAt ? `#${clickCount}, last click at ${clickedAt.toLocaleTimeString()}` : 'Click OK please ...'
       })
    })

    function click() {
      state.clickCount++
      state.clickedAt = new Date()
    }

    return {
      state,
      click
    }
  }
}