import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { FC } from 'react'
import { Site } from '../../../interfaces'
import { SiteForm } from '../../tailwindUI'

interface TabFormSite {
  toggle: () => void
  setLeft: () => void
  site?: Site
}

export const TabSite: FC<TabFormSite> = ({ toggle, setLeft, site }) => {
  const click = () => {
    console.log('hola');
    
  }
  return (
    <div className='h-screen relative'>
      <Tabs variant='enclosed' className='p-2'>
        <TabList>
          <Tab>{site ? "Update" : "Create"}</Tab>
          <Tab>Data Base</Tab>
          <Tab>Images</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SiteForm toggle={toggle} setLeft={setLeft} site={site} />

          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <div className="group-button-form absolute inset-x-0 bottom-0">
        <button
          type="submit"
          className="btn-primary "
        >
          {site ? 'Update' : 'Created'}
        </button>
        <button
          type="button"
          className="btn-default"
          onClick={setLeft}>
          Cancel
        </button>
      </div>
    </div>
  )
}