import path from 'path'
import registerRequireContextHook from 'babel-plugin-require-context-hook/register'
import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

const getMatchOptions = ({ context: { kind, story }, url }) => {
  return {
    failureThreshold: 0.2,
    failureThresholdType: 'percent',
  }
}
const beforeScreenshot = (page, { context: { kind, story }, url }) => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve()
    }, 600)
  )
}

registerRequireContextHook()
initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: `file://${path.resolve(__dirname, '.out')}`,
    getMatchOptions,
    beforeScreenshot,
  }),
})
