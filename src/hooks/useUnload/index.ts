import { onMounted, onUnmounted } from 'vue'
import { useProjectSettingStoreWithOut } from '@/store/modules/projectSetting'
import { useDesignMd5WithOut } from '@/store/modules/designMd5'

const useProject = useProjectSettingStoreWithOut()
const useDesignMd5 = useDesignMd5WithOut()
export const useUnloadAlert = () => {
  const beforeUnload = (e: BeforeUnloadEvent) => {
    const { md5, lastMd5 } = useDesignMd5
    if (lastMd5 && md5 !== lastMd5) {
      e.preventDefault()
      e.returnValue = ''
    }
  }

  onMounted(() => {
    if (useProject.enableCloseAlert) {
      window.addEventListener('beforeunload', beforeUnload)
    }
  })

  onUnmounted(() => {
    removeAlert()
  })

  const removeAlert = () => {
    window.removeEventListener('beforeunload', beforeUnload)
  }
  return removeAlert
}
