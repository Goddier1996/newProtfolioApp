import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.REACT_APP_SANITY || "",

    dataset: 'production'
  }
})
