import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icon',
  setup() {
    return () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 32 32"
        >
          <path d="M10 6h4v4h-4z" fill="currentColor"></path>
          <path d="M18 6h4v4h-4z" fill="currentColor"></path>
          <path d="M10 14h4v4h-4z" fill="currentColor"></path>
          <path d="M18 14h4v4h-4z" fill="currentColor"></path>
          <path d="M10 22h4v4h-4z" fill="currentColor"></path>
          <path d="M18 22h4v4h-4z" fill="currentColor"></path>
        </svg>
      )
    }
  }
})
