import en from '@public/i18n/en.json'
import { get } from 'lodash'
import { useRouter } from 'next/router'

const data = {
  en: en,
}

const useTranslation = (root?: string) => {
  const router = useRouter()
  const locale = router.locale || ''

  const t = (path = '') => {
    const obj = root ? get(data, `${locale}.${root}`) : get(data, locale)
    return get(obj, path) || path
  }

  return { t }
}

export default useTranslation
