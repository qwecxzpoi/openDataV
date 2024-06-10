import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icon',
  setup() {
    return () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 20 20"
        >
          <g fill="none">
            <path
              d="M14.5 2a.5.5 0 0 0 0 1h1.793L11.5 7.793L8.854 5.146a.5.5 0 0 0-.708 0l-5 5a.5.5 0 0 0 .708.708L8.5 6.207l2.646 2.647a.5.5 0 0 0 .708 0L17 3.707V5.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3zm1 7a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 1 0v-8a.5.5 0 0 0-.5-.5zm-8 2a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5zm3.5 2.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4zm-8 1a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
      )
    }
  }
})
